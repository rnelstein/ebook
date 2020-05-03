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
    const [stripe, setStripe] = useState(null);

    useEffect(() => {
        async function fetchConfig() {
            // Fetch config from our backend.
            const {publicKey} = await fetch(
                '/api/config'
            ).then((res) => res.json());

            setStripe(await loadStripe(publicKey))
        }

        fetchConfig();
    }, []);

    const handleClick = async (event) => {
        // Call your backend to create the Checkout session.
        // dispatch({ type: 'setLoading', payload: { loading: true } });
        const {sessionId} = await fetchCheckoutSession({quantity: 1,});
        // When the customer clicks on the button, redirect them to Checkout.
        await stripe.redirectToCheckout({sessionId});
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
                                <h2 className="h-lg mb-3 text-white">
                                    Alles wat nodig is om uw ecommerce te laten groeien!
                                </h2>
                                <p className="lead mb-4 text-white">We zijn er om u te helpen uw e-commerce te laten
                                    groeien en meer omzet te genereren. We hebben onze top tips samengesteld voor het
                                    creëren van een duurzame online inkomstenstroom, het vinden van de beste producten
                                    om te verkopen en diepgaande digitale marketing modellen.</p>
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
                                <p className="lead mb-4">Met de juiste kennis en middelen kunt je actie ondernemen om
                                    het online bedrijf te starten waar je van gedroomd hebt. Deze uitgebreide gids biedt
                                    tips en trucs om uw droom werkelijkheid te laten worden.
                                    <br/><br/>
                                    De eerste editie van De Complete Bol verkooppartner Gids 2020: leert u de basis en
                                    daarna. Het bereidt u voor op het onderzoeken naar de juiste producten, het
                                    onderhandelen met leveranciers voor de beste prijs en het promoten van de producten.
                                    De gids helpt je bij het navigeren door de belangrijkste aandachtspunten, valkuilen
                                    en risico's met betrekking tot het Bol partnerverkopen.</p>
                                <ul className="checklist mb-4">
                                    <li>28 pagina's verdeeld in 4 Hoofdstukken</li>
                                    <li>PDF Bestand Download</li>
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
                        <h2 className="text-center mb-5">Dit is wat onze lezers zeggen</h2>
                        <div id="carouselTestimoniControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">


                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-md-4 mb-4">
                                            <div className="talk-box">
                                                <header>
                                                    <div className="profile-name">
                                                        <h3 className="mb-0">Peter Salman</h3>
                                                    </div>
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
                                                        <h3 className="mb-0">Natali Wijnhaven</h3>
                                                    </div>
                                                </header>
                                                <blockquote>
                                                    “WAUW! In feite wowee! Als ik hierna nog steeds geen geld kan
                                                    verdienen
                                                    met bol.com? Dan weet ik het niet! De auteur heeft geweldig werk
                                                    geleverd naar mijn mening. Geweldige prijs-kwaliteitverhouding hoe
                                                    je het ook bekijkt.”
                                                </blockquote>
                                            </div>
                                        </div>

                                        <div className="col-md-4 mb-4">
                                            <div className="talk-box">
                                                <header>
                                                    <div className="profile-name">
                                                        <h3 className="mb-0">Mulan Tivanka</h3>
                                                    </div>
                                                </header>
                                                <blockquote>
                                                    “Deze gids is waar voor uw geld cursus voor iemand die overweegt een
                                                    ecommerce te starten. Vrijwel alle stappen eenvoudig te volgen.
                                                    Er zijn ook talloze tips en trucs waarvan ik zeker weet dat ze zelfs
                                                    bestaande verkopers kunnen helpen.
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


                <div className="chapters">
                    <div className="container">

                        <h2 className="text-center mb-5">Wat leer je na het lezen van dit boek:</h2>
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

                        <div className="row">
                            <div className="col-12">
                                <div className="free-box">
                                    <div className="row align-items-center">
                                        <figure className="col-md-5 mb-4">
                                            <img src="images/book-free-chapter.png" alt="book free chapter"/>
                                        </figure>
                                        <div className="col-md-7 pl-md-4">
                                            <h3 className="mb-4 text-white">Meld je aan voor de dagelijkse
                                                nieuwsbrief</h3>
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
                                                <a href="#" className="btn btn-lg btn-dark w-100 btn-primary mb-3">Meld
                                                    mij aan</a>
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
                                        <a className="nav-link" href="#"><i className="fab fa-facebook-square"/></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.instagram.com/bol.meesterbrein/">
                                            <i className="fab fa-instagram"/>
                                        </a>
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
