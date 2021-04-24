import React from 'react';

function Home() {
    return (
        // <div>
        //     <h3>Welcome Home!</h3>
        //     <h4 className="text-primary">primary text color.</h4>
        //     <h4 className="text-dark">dark text color.</h4>
        // </div>
        <div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 my-5">
                <div class="col mb-4">
                    <div class="card h-100">
                        <a target="_blank" href="https://github.com/ancheetah" rel="noreferrer"><img class="card-img-top img-fluid"
                                src="img/Octocat.png" alt="github logo" width="200" height="200"/></a>
                        <div class="card-body bg-light">
                            <h5 class="card-title text-dark">GitHub</h5>
                            <p class="card-text text-muted">Check out my code for various projects <a target="_blank"
                                    href="https://github.com/ancheetah" rel="noreferrer">here</a> and learn a
                                little bit about me.</p>
                        </div>
                        <div class="card-footer bg-secondary txt-white">
                            <a target="_blank" href="https://github.com/ancheetah" rel="noreferrer">Go to GitHub <i
                                    class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card h-100">
                        <a target="_blank" href="4foodies/index.html"><img class="card-img-top img-fluid"
                                src="img/Bootstrap-logo.png" alt="bootstrap logo" width="200" height="200"/></a>
                        <div class="card-body bg-light">
                            <h5 class="card-title text-dark">4Foodies</h5>
                            <p class="card-text text-muted">A responsive recipe <a href="4foodies/index.html" target="blank">website</a> built with Bootstrap for
                                Nucamp Coding Bootcamp. My first github collaboration!</p>
                        </div>
                        <div class="card-footer bg-secondary txt-white">
                            <a target="_blank" href="https://github.com/ancheetah/4foodies" rel="noreferrer">View Project Proposal <i
                                    class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card h-100">
                        <a target="_blank" href="https://ancheetah.github.io/supreme" rel="noreferrer"><img class="card-img-top img-fluid"
                                src="img/reactJS.png" alt="react js logo" width="200" height="200"/></a>
                        <div class="card-body bg-light">
                            <h5 class="card-title text-dark">React App: Supreme</h5>
                            <p class="card-text text-muted">A mock e-commerce store built with React.js and Redux featuring a
                                shopping cart and the ability to sort items. Demo the store <a href="https://ancheetah.github.io/supreme" target="_blank" rel="noreferrer">here</a>.</p>
                        </div>
                        <div class="card-footer bg-secondary txt-white">
                            <a target="_blank" href="https://github.com/ancheetah/supreme" rel="noreferrer">Go To Repository <i
                                    class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card h-100">
                        <a target="_blank" href="https://github.com/ancheetah/react-native-nucamp" rel="noreferrer"><img class="card-img-top img-fluid"
                                src="img/react-native-logo.png" alt="React Native logo" width="200" height="200"/></a>
                        <div class="card-body bg-light">
                            <h5 class="card-title text-dark">What I'm learning now: React Native</h5>
                            <p class="card-text text-muted">Converted a React website into a native app for Android and iOS
                                using React Native while following along with Nucamp coding bootcamp.</p>
                        </div>
                        <div class="card-footer bg-secondary txt-white">
                            <a target="_blank" href="https://github.com/ancheetah/react-native-nucamp" rel="noreferrer">Go to Repository <i
                                    class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card h-100">
                        <a target="_blank" href="https://www.madiff.org/" rel="noreferrer"><img class="card-img-top img-fluid"
                                src="img/WordPress.png" alt="Wordpress logo"  width="200" height="200"/></a>
                        <div class="card-body bg-light">
                            <h5 class="card-title text-dark">Freelance: MADIFF</h5>
                            <p class="card-text text-muted">Quickly set up a website for a non-profit
                                organization using a Wordpress theme.
                            </p>
                        </div>
                        <div class="card-footer bg-secondary txt-white">
                            <a target="_blank" href="https://www.madiff.org/" rel="noreferrer">Go to Website <i
                                    class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                {/* <!-- <div class="col mb-4">
                    <div class="card h-100">
                        <a target="_blank" href="vueProduct/index.html"><img class="card-img-top"
                                src="https://picsum.photos/seed/16709/300" alt="Vue Socks placeholder"/></a>
                        <div class="card-body bg-light">
                            <h5 class="card-title text-dark">What I'm learning: Vue.js</h5>
                            <p class="card-text text-muted">Dynamic product page with cart and hover events.
                                Following along with <b>Intro to Vue.js</b> course from <a target="_blank"
                                    href="https://www.vuemastery.com/courses/intro-to-vue-js">Vue Mastery</a>.</p>
                        </div>
                        <div class="card-footer bg-secondary txt-white">
                            <a target="_blank" href="vueProduct/index.html">Go to product page <i
                                    class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div> --> */}
            </div>

            <div class="card mb-5">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <a target="_blank" href="https://www.gilligancontracting.com" rel="noreferrer"><img class="card-img-top"
                                src="img/squarespace-logo-horizontal-black.jpg"
                                alt="squarespace logo" /></a>
                    </div>
                    <div class="col-md-8 bg-light">
                        <div class="card-body">
                            <h5 class="card-title text-dark">Freelance: Gilligan Contracting</h5>
                            <p class="card-text text-muted">Website redesign for a local business with Squarespace. Added more breakpoints for better responsive design. Custom logo. Photoshop CC &amp; Lightroom CC editing. Transferred older, outdated site to new domain registrar and hosting (DNS, email, web).</p>
                        </div>
                        <div class="card-footer bg-light">
                            <a target="_blank" href="https://www.gilligancontracting.com" class="text-primary" rel="noreferrer">Go to
                                website
                                <i class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="my-5" />

            <div class="row">
                <div class="col-10 bg-primary text-white py-5 mx-auto rounded-lg">
                    <h3 class="text-center">Nucamp Full Stack Web + Mobile Development Bootcamp</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-5 d-flex justify-content-center mx-auto my-4">
                    {/* <!-- <h4>Bootstrap</h4> --> */}
                    <figure class="figure">
                        <img src="img/Bootstrap_Course_Completion.png" alt="Nucamp Bootstrap Badge"
                            class="figure-img img-fluid border-0" width="150" height="150" />
                        <figcaption class="figure-caption text-center">Bootstrap <br/></figcaption>
                    </figure>
                </div>
                <div class="col-5 d-flex justify-content-center mx-auto my-4">
                    {/* <!-- <h4>React Native</h4> --> */}
                    <figure class="figure">
                        <img src="img/React_Native_Course_Completion.png" alt="Nucamp React Native Badge"
                            class="figure-img img-fluid border-0" width="150" height="150" />
                        <figcaption class="figure-caption text-center">React Native</figcaption>
                    </figure>
                </div>
                <div class="col-5 d-flex justify-content-center mx-auto my-4">
                    {/* <!-- <h4>React</h4> --> */}
                    <figure class="figure">
                        <img src="img/React_Course_Completion.png" alt="Nucamp React Badge"
                            class="figure-img img-fluid border-0" width="150" height="150" />
                        <figcaption class="figure-caption text-center">React</figcaption>
                    </figure>
                </div>
                <div class="col-5 d-flex justify-content-center mx-auto my-4">
                    {/* <!-- <h4>Backend</h4> --> */}
                    <figure class="figure">
                        <img src="img/Node_Express_MongoDB_Course_Completion.png" alt="Nucamp React Badge"
                            class="figure-img img-fluid border-0" width="150" height="150" />
                        <figcaption class="figure-caption text-center">Node, Express, Mongo DB</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default Home;