
window.$ = window.jQuery = require('jquery');

import { calculatePublicationDate } from "./utils";
import FavouritesService from "./services/FavouritesService";
import FavouritesManager from "./services/FavouritesManager";

const favouritesService = new FavouritesService(localStorage.getItem('favourites'));
const favouritesManager = new FavouritesManager(favouritesService);

loadArticles();

function loadArticles() {

    $(".item-list").html(renderArticles());
}

function renderArticles() {
    var html = `
        
        <article class="col-sm-6 col-md-6 col-lg-6" data-id="1">
            <div class="item">
                <div class="item-info break_word">
                    <picture>
                        <source media="(min-width:1200px)" srcset="images/articles/art-1-500px.jpg 500w, images/articles/art-1-1000px.jpg 1000w">
                        <source media="(min-width:768px)" srcset="images/articles/art-1-500px.jpg 5000w, images/articles/art-1-1000px.jpg 1000w">
                        <img class="thumb" src="images/articles/art-1-1500px.jpg" srcset="images/articles/art-1-500px.jpg 500w, images/articles/art-1-1000px.jpg 1000w, images/articles/art-1-1500px.jpg 1500w">
                    </picture>
                    <div class="text-info">
                        <a href="/article.html">
                            <h1>International Artist Feature: Malaysia</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                    <div class="autor vertical-align">
                        <img class="avatar" src="images/editors/ed_1.jpg" alt="Hoddie Allen" srcset="">
                        <p>Hoddie Allen</p>
                    </div>

                    <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${favouritesManager.loadClassLike("1")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 6000))}</div>
                        </div>
                    </div>
                </div>
            </div>
        </article>

        <article class="col-sm-6 col-md-6 col-lg-6" data-id="2">
            <div class="item">
            <div class="item-info break_word">
                <video class="thumb" poster="images/articles/art-2.jpg"
                    controls preload>
                    <source src=http://techslides.com/demos/sample-videos/small.webm type=video/webm>
                    <source src=http://techslides.com/demos/sample-videos/small.ogv type=video/ogg>
                    <source src=http://techslides.com/demos/sample-videos/small.mp4 type=video/mp4>
                    <source src=http://techslides.com/demos/sample-videos/small.3gp type=video/3gp>
                </video>
                <div class="text-info">
                    <a href="/article.html">
                        <h1>Amazing Series: Stranger Things</h1>
                        <div class="description">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                vero placeat rerum officia alias culpa.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                vero placeat rerum officia alias culpa.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                vero placeat rerum officia alias culpa.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                vero placeat rerum officia alias culpa.</p>
                        </div>
                    </a>
                </div>
            </div>

            <div class="footer-item">
                <div class="autor vertical-align">
                    <img class="avatar" src="/images/default-user-image.jpg" alt="Avatar"
                        srcset="">
                    <p>Jack Sparrow</p>
                </div>

                <div class="info-interations">
                    <div class="vertical-align pull-right">
                        <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                        <div class="likes"><i class="${favouritesManager.loadClassLike("2")}" aria-hidden="true"></i></div>
                    </div>
                    <div class="vertical-align">
                        <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 1000 * 60 * 240))}</div>
                    </div>
                </div>
            </div>

            </div>
        </article>
        
        <article class="col-sm-6 col-md-6 col-lg-3" data-id="3">
            <div class="item">
                <div class="item-info break_word">
                <picture>
                    <source media="(min-width:1200px)" srcset="images/articles/art-3-500px.jpg 500w, images/articles/art-3-1000px.jpg 1000w">
                    <source media="(min-width:768px)" srcset="images/articles/art-3-500px.jpg 5000w, images/articles/art-3-1000px.jpg 1000w">
                    <img class="thumb" src="images/articles/art-3-1500px.jpg" srcset="images/articles/art-3-500px.jpg 500w, images/articles/art-3-1000px.jpg 1000w, images/articles/art-3-1500px.jpg 1500w">
                </picture>
                    <div class="text-info">
                        <a href="/article.html">
                            <h1>The art of pictures</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa. Adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci!</p>
                                <p>Lorem ipsum dolor sit amet consectetur,  Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                    <div class="autor vertical-align">
                        <img class="avatar" src="images/editors/ed_3.jpg" alt="Peter Smith" srcset="">
                        <p>Peter Smith</p>
                    </div>

                    <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${favouritesManager.loadClassLike("3")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 6000 * 60 * 20))}</div>
                        </div>
                    </div>
                </div>



            </div>
        </article>

        <article class="col-sm-6 col-md-6 col-lg-3" data-id="4">
            <div class="item">
            <div class="item-info break_word">

                <div class="text-info">
                    <a href="/article.html">
                        <h1>How Does the Internet Work?</h1>
                        <div class="description">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                vero placeat rerum officia alias culpa.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                vero placeat rerum officia alias culpa.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                vero placeat rerum officia alias culpa.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                vero placeat rerum officia alias culpa.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                vero placeat rerum officia alias culpa.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                vero placeat rerum officia alias culpa.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                vero placeat rerum officia alias culpa.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                vero placeat rerum officia alias culpa.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                vero placeat rerum officia alias culpa.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                vero placeat rerum officia alias culpa.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                vero placeat rerum officia alias culpa.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                vero placeat rerum officia alias culpa.</p>
                        </div>
                    </a>
                </div>
            </div>

            <div class="footer-item">
                <div class="autor vertical-align">
                    <img class="avatar" src="images/editors/ed_4.jpg" alt="Avatar" srcset="">
                    <p>Marcus Logan</p>
                </div>

                <div class="info-interations">
                    <div class="vertical-align pull-right">
                        <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                        <div class="likes"><i class="${favouritesManager.loadClassLike("4")}" aria-hidden="true"></i></div>
                    </div>
                    <div class="vertical-align">
                        <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 1000 * 60 * 15))}</div>
                    </div>
                </div>
            </div>



            </div>
        </article>

        <article class="col-sm-6 col-md-6 col-lg-3" data-id="5">
            <div class="item">
                <div class="item-info break_word">
                    <picture>
                        <source media="(min-width:1200px)" srcset="images/articles/art-5-500px.jpg 500w, images/articles/art-5-1000px.jpg 1000w">
                        <source media="(min-width:768px)" srcset="images/articles/art-5-500px.jpg 5000w, images/articles/art-5-1000px.jpg 1000w">
                        <img class="thumb" src="images/articles/art-5-1500px.jpg" srcset="images/articles/art-5-500px.jpg 500w, images/articles/art-5-1000px.jpg 1000w, images/articles/art-5-1500px.jpg 1500w">
                    </picture>
                    <div class="text-info">
                        <a href="/article.html">
                            <h1>'The Simpsons' dismissed its composer after 27 years</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa rerum sequi, nulla illo distinctio blanditiis nesciunt adipisci!.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                    <div class="autor vertical-align">
                        <img class="avatar" src="images/editors/ed_5.jpg" alt="Alice Morgan" srcset="">
                        <p>Alice Morgan</p>
                    </div>

                    <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${favouritesManager.loadClassLike("5")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 1000 * 60 * 500 * 2))}</div>
                        </div>
                    </div>
                </div>



            </div>
        </article>

        <article class="col-sm-6 col-md-6 col-lg-3" data-id="6">
            <div class="item">
                <div class="item-info break_word">

                    <div class="text-info">
                        <a href="/article.html">
                            <h1>When is the best date to buy a car?</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                    <div class="autor vertical-align">
                        <img class="avatar" src="images/editors/ed_6.jpg" alt="Francesca Dannelo" srcset="">
                        <p>Francesca Dannelo</p>
                    </div>

                    <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${favouritesManager.loadClassLike("6")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 1000 * 60 * 15 * 500))}</div>
                        </div>
                    </div>
                </div>



            </div>
        </article>

        <article class="col-sm-6 col-md-6 col-lg-3" data-id="7">
            <div class="item">
                <div class="item-info break_word">
                <picture>
                    <source media="(min-width:1200px)" srcset="images/articles/art-7-500px.jpg 500w, images/articles/art-7-1000px.jpg 1000w">
                    <source media="(min-width:768px)" srcset="images/articles/art-3-500px.jpg 5000w, images/articles/art-7-1000px.jpg 1000w">
                    <img class="thumb" src="images/articles/art-7-1500px.jpg" srcset="images/articles/art-7-500px.jpg 500w, images/articles/art-7-1000px.jpg 1000w, images/articles/art-7-1500px.jpg 1500w">
                </picture>
                    <div class="text-info">
                        <a href="/article.html">
                            <h1>Cryptoeconomics: Paving the Future of Blockchain Technology</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                <div class="autor vertical-align">
                <img class="avatar" src="images/editors/ed_1.jpg" alt="Hoddie Allen" srcset="">
                <p>Hoddie Allen</p>
            </div>

                    <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${favouritesManager.loadClassLike("7")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 1000 * 60 * 15 * 600))}</div>
                        </div>
                    </div>
                </div>



            </div>
        </article>

        <article class="col-sm-6 col-md-6 col-lg-3" data-id="8">
            <div class="item">
                <div class="item-info break_word">
                    <video class="thumb" poster="images/articles/art-8.jpg"
                        controls preload>
                        <source src=http://techslides.com/demos/sample-videos/small.webm type=video/webm>
                        <source src=http://techslides.com/demos/sample-videos/small.ogv type=video/ogg>
                        <source src=http://techslides.com/demos/sample-videos/small.mp4 type=video/mp4>
                        <source src=http://techslides.com/demos/sample-videos/small.3gp type=video/3gp>
                    </video>
                    <div class="text-info">
                        <a href="/article.html">
                            <h1>The best of Guns & Roses</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                    <div class="autor vertical-align">
                        <img class="avatar" src="/images/default-user-image.jpg" alt="Avatar"
                    srcset="">
                        <p>Jack Sparrow</p>
                    </div>

                   <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${favouritesManager.loadClassLike("8")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 1000 * 60 * 25 * 800))}</div>
                        </div>
                    </div>

            </div>
        </article>

        <article class="col-sm-6 col-md-6 col-lg-3" data-id="9">
            <div class="item">
                <div class="item-info break_word">
                <picture>
                    <source media="(min-width:1200px)" srcset="images/articles/art-9-500px.jpg 500w, images/articles/art-9-1000px.jpg 1000w">
                    <source media="(min-width:768px)" srcset="images/articles/art-9-500px.jpg 5000w, images/articles/art-9-1000px.jpg 1000w">
                    <img class="thumb" src="images/articles/art-9-1500px.jpg" srcset="images/articles/art-9-500px.jpg 500w, images/articles/art-9-1000px.jpg 1000w, images/articles/art-9-1500px.jpg 1500w">
                </picture>
                    <div class="text-info">
                        <a href="/article.html">
                            <h1>Working hard</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                <div class="autor vertical-align">
                    <img class="avatar" src="images/editors/ed_5.jpg" alt="Alice Morgan" srcset="">
                    <p>Alice Morgan</p>
                </div>

                    <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${favouritesManager.loadClassLike("9")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 1000 * 60 * 15 * 900))}</div>
                        </div>
                    </div>
                </div>



            </div>
        </article>

        <article class="col-sm-6 col-md-6 col-lg-3" data-id="10">
            <div class="item">
                <div class="item-info break_word">

                    <div class="text-info">
                        <a href="/article.html">
                            <h1>How To Start</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                <div class="autor vertical-align">
                <img class="avatar" src="images/editors/ed_6.jpg" alt="Francesca Dannelo" srcset="">
                <p>Francesca Dannelo</p>
            </div>

                    <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${favouritesManager.loadClassLike("10")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 1000 * 60 * 15 * 2000))}</div>
                        </div>
                    </div>
                </div>



            </div>
        </article>
        `;

    return html;
}

$(".likes").click(function () {

    let favouriteId = $(this).closest('article')[0].dataset.id;
    let icon_heart = $(this).find(".fa");

    favouritesManager.clickFavourite(favouriteId,icon_heart);

});


$(".go-article-content").click(function () {
    $('html, body').animate({
        scrollTop: $("#article-content").offset().top
    }, 1000);
});


$(".go-comments").click(function () {

    if (window.location.pathname == "/") {
        window.location.href = "./article.html#comments-list";
    }

    $('html,body').animate(
        {
            scrollTop: $("#comments-list").offset().top
        }, 2000);

});
