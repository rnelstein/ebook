import React, {useEffect, useState} from 'react';
import Header from "./Header";
import {loadStripe} from "@stripe/stripe-js";


const fetchCheckoutSession = async ({quantity}) => {
    return fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            quantity,
        }),
    }).then((res) => res.json());
};

function Home() {
    const [stripe, setStripe] = useState(null)

    useEffect(() => {
        async function fetchConfig() {
            // Fetch config from our backend.
            setStripe(await loadStripe('pk_test_9op09jaOtWB0qeg7bC4EMb6X00hKevtPhV'))
        }

        fetchConfig();
    }, []);

    const handleClick = async (event) => {
        // Call your backend to create the Checkout session.
        // dispatch({ type: 'setLoading', payload: { loading: true } });
        const {sessionId} = await fetchCheckoutSession({
            quantity: 1,
        });
        // When the customer clicks on the button, redirect them to Checkout.
        const {error} = await stripe.redirectToCheckout({
            sessionId,
        });
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
        if (error) {
            // dispatch({ type: 'setError', payload: { error } });
            //  dispatch({ type: 'setLoading', payload: { loading: false } });
        }
    };

    return (
        <div className="App">
            <Header/>

            <main className="bd-masthead" id="content">

                <div className="intro">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <figure>
                                    <img src="images/smartmockups_k9et078tbg.png" alt="Intro Book"/>
                                </figure>
                            </div>
                            <div className="col-md-6 pl-md-5">
                                <span className="stock-label">Bestseller</span>
                                <h2 className="h-lg mb-3 text-white">De complete Bol-verkoop blauwdruk. Start vandaag
                                    nog een geheel nieuwe carrière!</h2>
                                <p className="lead mb-4 text-white">Leer stap voor stap hoe u helemaal opnieuw kunt
                                    beginnen en een voltijds inkomen, of veel meer, kunt verdienen als Bol.com
                                    verkoper.</p>
                                <button
                                    className="btn btn-lg btn-primary btn-dark mb-3"
                                    role="link"
                                    onClick={handleClick}>
                                    Koop Nu voor <del>€35</del> €19,95
                                </button>

                                <span className="block text-white"><i
                                    className="fas fa-file-pdf">&nbsp;</i>PDF bestand</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="feature">
                    <div className="container">
                        <div className="row align-item-center">
                            <div className="col-md-6 pr-md-5">
                                <h2 className="h-lg mb-3">Start een winstgevende en duurzame onderneming</h2>
                                <p className="lead mb-4">Nunc et posuere urna, non convallis nulla. Nunc semper
                                    efficitur
                                    dui, et gravida sapien rhoncus a. Vivamus malesuada, urna vel volutpat dignissim,
                                    risus
                                    libero venenatis purus, nec interdum nulla nunc ut lorem.</p>
                                <ul className="checklist mb-4">
                                    <li>128 Pages with 9 Chapters</li>
                                    <li>Free PDF File Download</li>
                                    <li>Free Merchandise</li>
                                    <li>Free Shipping All Over The World</li>
                                </ul>
                                <button
                                    className="btn btn-lg btn-primary mb-3 text-white"
                                    role="link"
                                    onClick={handleClick}>
                                    Koop Nu voor <del>€35</del> €19,95
                                </button>
                            </div>
                            <div className="col-md-6 mt-4">
                                <figure className="text-center">
                                    <img src="images/book-section-02.png" alt="Book Feature"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonial">
                    <div className="container">
                        <h2 className="text-center mb-5">Here’s What Our Readers Say</h2>
                        <div id="carouselTestimoniControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">


                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-md-4 mb-4">
                                            <div className="talk-box">
                                                <header>
                                                    <div className="profile-name">
                                                        <h3 className="mb-0">Peter Salman</h3>
                                                        <span>Publisher at Bukumoo</span>
                                                    </div>
                                                    <figure className="profile-pict">
                                                        <img src="images/face-01.png" alt="Face One"/>
                                                    </figure>
                                                </header>
                                                <blockquote>“k ben al geruime tijd op zoek naar een systeem waarmee ik
                                                    een nieuwe inkomstenstroom kan genereren om mijn pensioen dit jaar
                                                    aan te vullen. Dit was verreweg het meest informatief en het
                                                    gemakkelijkst te begrijpen.”
                                                </blockquote>
                                            </div>
                                        </div>

                                        <div className="col-md-4 mb-4">
                                            <div className="talk-box">
                                                <header>
                                                    <div className="profile-name">
                                                        <h3 className="mb-0">Natali Wijaya</h3>
                                                        <span>Internet Marketer</span>
                                                    </div>
                                                    <figure className="profile-pict">
                                                        <img src="images/face-02.png" alt="Face Two"/>
                                                    </figure>
                                                </header>
                                                <blockquote>
                                                    “WAUW! In feite wowee! Als ik daarna geen geld meer kan verdienen
                                                    met Amazon! Nou ik weet het niet! De auteur heeft geweldig werk
                                                    geleverd naar mijn onervaren mening.
                                                    Geweldige prijs-kwaliteitverhouding hoe je het ook bekijkt.”
                                                </blockquote>
                                            </div>
                                        </div>

                                        <div className="col-md-4 mb-4">
                                            <div className="talk-box">
                                                <header>
                                                    <div className="profile-name">
                                                        <h3 className="mb-0">Mulan Tivanka</h3>
                                                        <span>Co&dash;Founder Nambo Media</span>
                                                    </div>
                                                    <figure className="profile-pict">
                                                        <img src="images/face-03.png" alt="Face Three"/>
                                                    </figure>
                                                </header>
                                                <blockquote>
                                                    “Natuurlijk waar voor uw geld cursus voor iemand die overweegt een
                                                    Amazon-bedrijf te starten. Vrijwel alle stappen in een relatief
                                                    eenvoudig te volgen indeling. Er zijn ook talloze tips en trucs
                                                    waarvan ik zeker weet dat ze zelfs gevestigde verkopers zouden
                                                    helpen. Tal van referentiemateriaal om te downloaden.
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselTestimoniControls" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselTestimoniControls" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>


                <div className="reason">
                    <div className="container">
                        <h2 className="text-center mb-5">Why Facebook ADS?</h2>
                        <div className="row">

                            <div className="col-6 col-md-4">
                                <span className="icon-lg"><i className="fas fa-laugh"></i></span>
                                <h3>Targeted User</h3>
                                <p className="mb-4">Donec gravida purus quis bibendum pharetra. Phasellus ultricies
                                    tincidunt velit, eu rutrum ex vehicula in. Ut quis eleifend lectus. Duis suscipit
                                    rhoncus interdum. Donec et erat magna. Nunc tempus lacinia libero vitae
                                    consequat.</p>
                            </div>

                            <div className="col-6 col-md-4">
                                <span className="icon-lg"><i className="fas fa-money-bill-wave"></i></span>
                                <h3>Cheapest Ads</h3>
                                <p className="mb-4">Nulla dignissim scelerisque commodo. Proin dapibus varius mi, in
                                    maximus
                                    ligula consequat id. Aenean et elit dolor. Vivamus rutrum sit amet nunc elementum
                                    efficitur. Fusce a aliquet nisi, eu sagittis nisi.</p>
                            </div>

                            <div className="col-6 col-md-4">
                                <span className="icon-lg"><i className="fas fa-tachometer-alt"></i></span>
                                <h3>Fast Results</h3>
                                <p className="mb-4">Vivamus malesuada, urna vel volutpat dignissim, risus libero
                                    venenatis
                                    purus, nec interdum nulla nunc ut lorem. Proin lorem dolor, congue ut pulvinar vel,
                                    tempus eget nisi. Morbi eget sollicitudin ligula. Cras dictum nibh nulla.</p>
                            </div>

                            <div className="col-6 col-md-4">
                                <span className="icon-lg"><i className="fas fa-lightbulb"></i></span>
                                <h3>Increase Brand Awareness</h3>
                                <p className="mb-4">Donec gravida purus quis bibendum pharetra. Phasellus ultricies
                                    tincidunt velit, eu rutrum ex vehicula in. Ut quis eleifend lectus. Duis suscipit
                                    rhoncus interdum. Donec et erat magna. Nunc tempus lacinia libero vitae
                                    consequat.</p>
                            </div>

                            <div className="col-6 col-md-4">
                                <span className="icon-lg"><i className="fas fa-chart-line"></i></span>
                                <h3>Increase Traffic Website</h3>
                                <p className="mb-4">Nulla dignissim scelerisque commodo. Proin dapibus varius mi, in
                                    maximus
                                    ligula consequat id. Aenean et elit dolor. Vivamus rutrum sit amet nunc elementum
                                    efficitur. Fusce a aliquet nisi, eu sagittis nisi.</p>
                            </div>

                            <div className="col-6 col-md-4">
                                <span className="icon-lg"><i className="fas fa-pencil-ruler"></i></span>
                                <h3>Measurable</h3>
                                <p className="mb-4">Vivamus malesuada, urna vel volutpat dignissim, risus libero
                                    venenatis
                                    purus, nec interdum nulla nunc ut lorem. Proin lorem dolor, congue ut pulvinar vel,
                                    tempus eget nisi. Morbi eget sollicitudin ligula. Cras dictum nibh nulla.</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="chapters">
                    <div className="container">

                        <h2 className="text-center mb-5">After Reading This Book You<br/>Will Learn:</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="checklist">
                                    <li>Gebruik maken van het Bol-platform</li>
                                    <li>Waar en hoe items te kopen</li>
                                    <li>Perfecte advertenties maken</li>
                                    <li>Verkoop op juiste manier starten</li>
                                    <li>Fouten en valkuilen vermijden</li>
                                </ul>
                            </div>

                            <div className="col-md-6">
                                <ul className="checklist">
                                    <li>Eenvoudig stappenplan om proces vooruit te spoelen</li>
                                    <li>Verkoop tactieken</li>
                                    <li>Gebruik maken van niches</li>
                                    <li>Geen tijd te verspillen</li>
                                    <li>hoog verkoopvolume ontwikkelen met weinig concurrentie</li>
                                </ul>
                            </div>


                        </div>

                        <h2 className="text-center mt-5 mb-5">What’ Inside The Book</h2>
                        <div className="row">
                            <div className="col-12">
                                <div className="free-box">
                                    <div className="row align-items-center">
                                        <figure className="col-md-5 mb-4">
                                            <img src="images/book-free-chapter.png" alt="book free chapter"/>
                                        </figure>
                                        <div className="col-md-7 pl-md-4">
                                            <h3 className="mb-4 text-white">GET 2 CHAPTER (PDF) FOR FREE!</h3>
                                            <form>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <input type="text" className="form-control"
                                                               placeholder="Your Name"/>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <input type="email" className="form-control"
                                                               placeholder="Your Email"/>
                                                    </div>
                                                </div>
                                                <a href="#" className="btn btn-lg btn-dark w-100 btn-primary mb-3">Register
                                                    Now</a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="text-center mt-4 mb-4">

                            <button
                                className="btn btn-lg btn-primary text-white"
                                role="link"
                                onClick={handleClick}>
                                Koop Nu voor <del>€35</del> €19,95
                            </button>

                        </div>


                    </div>
                </div>





                <footer className="bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">


                                <ul className="navbar-nav footer-nav flex-row">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fab fa-facebook-square"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fab fa-instagram"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fab fa-linkedin"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fab fa-youtube"></i></a>
                                    </li>
                                </ul>
                                <p className="copy">Copyrights &copy; 2020 NelsteinMedia.</p>
                            </div>
                        </div>
                    </div>

                </footer>

            </main>

        </div>
    );
}

export default Home;
