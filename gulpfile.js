var gulp = require("gulp"); //importamos gulp
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
var notify = require("gulp-notify");
var gulpImport = require("gulp-html-import");
var tap = require("gulp-tap");
var browserify = require("browserify");
var buffer = require("gulp-buffer");
var sourcemaps = require("gulp-sourcemaps");
var htmlmin = require("gulp-htmlmin"); //minifica el html
var uglify = require("gulp-uglify"); // minificar el js
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer"); //añade los prefijos para que sea compatibles con navegadore antiguos
var cssnano = require("cssnano"); //minificar el css
var concat = require('gulp-concat'); //concatena ficheros
var imagemin = require('gulp-imagemin'); //comprime el peso de las imagenes
//var responsive = require('gulp-responsive'); //crea las imagenes en diferentes tamaños


//definir la tarea por defecto
gulp.task("default", ["sass", "fonts", "html", "js", "img"], function () {

    //iniciamos el servidor de desarrollo
    browserSync.init({
        //server: "dist/"
        proxy: "http://127.0.0.1:3100/"
    }); // arranca el servidor en la carpeta src

    //observa  cambios en los archivos SASS, y entones ejecuta la tarea 'sass'
    gulp.watch(["src/scss/*.scss", "src/scss/**/*.scss"], ["sass"]);

    //observa cambios en los archivos html y recarga el navegador
    gulp.watch(["src/*.html", "src/**/*.html"], ["html"]);

    // observa cambios en los archivos JS y entonces ejecuta la tarea 'js'
    gulp.watch(["src/js/*.js", "src/js/**/*.js"], ["js"]);
});

//compilar sass
gulp.task("sass", function () {
    gulp.src("src/scss/style.scss") //cargamos el archivo style.scss
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", function (error) { //lo compilamos con gulp-sass
            return notify().write(error); //si ocurre un error, mostramos una notificación
        }))
        .pipe(postcss([
            autoprefixer(), //transforma el css dandole compatibilidad a navegadores antiguos
            cssnano() //comprime/minifica el CSS
        ]))
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("dist/css")) //guardamos el resultado en dist
        .pipe(browserSync.stream()) //recargue el CSS del navegador
        .pipe(notify("SASS Compilado 🤠")); //notificación 
});

//copiar e importar html
gulp.task("html", function () {
    gulp.src("src/*.html")
        .pipe(gulpImport("src/components/")) //reemplaza los @import de los HTML
        .pipe(htmlmin({
            collapseWhitespace: true
        })) //minifica el HTML
        .pipe(gulp.dest("dist/"))
        .pipe(browserSync.stream()) //recargue el CSS del navegador
        .pipe(notify("HTML Importado"));
});

// compilar y generar un único javascript

gulp.task('js', function () {
    gulp.src(
            'src/js/main.js'
        )
        .pipe(tap(function (file) { // tap nos permite ejecutar una función por cada fichero seleccionado en gulp.src
            // reemplazamos el contenido del fichero por lo que nos devuelve browserify pasándole el fichero
            file.contents = browserify(file.path, {
                    debug: true
                }) // creamos una instancia de browserify en base al archivo y generamos el sourcemaps
                .transform("babelify", {
                    presets: ["es2015"]
                }) // traduce nuestro codigo de ES6 -> ES5
                .bundle() // compilamos el archivo
                .on("error", function (error) { // en caso de error, mostramos una notificación
                    return notify().write(error);
                });
        }))
        .pipe(buffer()) // convertimos a buffer para que funcione el siguiente pipe
        .pipe(sourcemaps.init({
            loadMaps: true
        })) //captura los courcempas del archivo fuente
        .pipe(uglify()) //minificamos el JavaScript
        .pipe(sourcemaps.write('/')) //guarda los sourcemaps en el mismo directorio que el archivo fuente
        .pipe(gulp.dest("dist/js")) // lo guardamos en la carpeta dist
        .pipe(browserSync.stream()) // recargamos el navegador
        .pipe(notify("JS Compilado"));
});


/**
 * Mueve fonts de bootstrap y los que haya en la carpeta src/fonts/ a dist/fonts
 */
gulp.task('fonts', function () {
    gulp.src([
            'node_modules/bootstrap-sass/assets/fonts/**/*',
            'src/fonts/**/*'
        ])
        .pipe(gulp.dest('dist/fonts/'));
});

/**
 * Tarea que optimiza las imagenes
 */
gulp.task('img', function () {
    gulp.src('src/images/**/*')
        .pipe(imagemin()) //optimizamos el peso de las imagenes
        .pipe(gulp.dest('dist/images/'));
});
