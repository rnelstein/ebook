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
                                <h2 className="h-lg mb-3 text-white">Alles wat je nodig hebt, jouw product te verkopen
                                    op bol.com!</h2>
                                <p className="lead mb-4 text-white">Wij zijn er om je te helpen je
                                    <a className="text-white" href="https://www.bol.com/"> bol.com</a> verkopen te
                                    en omzet te laten groeien, door onze ervaringen en tips over het
                                    creëren van een inkomstenstroom op lange termijn,
                                    vinden van de beste producten die je gaat verkopen en verschillende manieren
                                    van producten aanbieden via bol te onthullen.</p>
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
                                <h2 className="h-lg mb-3">Een winstgevende e-commerce op lange termijn</h2>
                                <p className="lead mb-4">Met de juiste kennis en middelen kun je actie ondernemen jouw
                                    lange termijn winstgevende e-commerce te starten waar je van gedroomd hebt. Deze
                                    uitgebreide gids bied heel erg veel tips en trucs die je nodig hebt om je droom
                                    werkelijkheid te laten maken.
                                    <br/><br/>
                                    In de eerste editie van De Complete Bol verkooppartner Gids 2020: leer je de basis
                                    als
                                    <a href="https://www.bol.com/"> bol.com</a> verkoper. Het bereid je voor op het
                                    onderzoeken naar de jouw product, het
                                    onderhandelen met leveranciers die producten aanbieden en het promoten van de
                                    producten die je gaat verkopen via <a href="https://www.bol.com/"> bol.com</a>.
                                    Tenslotte helpt de gids je bij het
                                    navigeren door de belangrijkste aandachtspunten, valkuilen en risico's als je
                                    producten verkoopt.</p>
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
                                    <li>Hoe en waar producten aanbieden</li>
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
                                    <li>Winstgevende e-commerce lange termijn starten</li>
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
                                        <a className="nav-link" href="https://www.instagram.com/bolmeesterbrein/">
                                            <i className="fab fa-instagram"/>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fab fa-youtube"/></a>
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
