import React from 'react';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="App">
            <header className="navbar navbar-light navbar-expand flex-column flex-md-row bd-navbar">
                <div className="container">
                    <h1 className="navbar-brand text-white">NelsteinMedia</h1>
                    <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex ">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fab fa-facebook-square text-white"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fab fa-instagram text-white"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fab fa-twitter text-white"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fab fa-linkedin text-white"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fab fa-youtube text-white"/></a>
                        </li>
                    </ul>
                </div>
            </header>

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
                                <Link to="/checkout" className="btn btn-lg btn-primary btn-dark mb-3">Koop Nu
                                    voor <del>€35</del> €19,95</Link>
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
                                <a href="#" className="btn btn-lg btn-primary mb-3 text-white">Purchase Book
                                    for <del>$90</del> $45</a>
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

                        <div className="row justify-align-center">

                            <div className="col-6 col-md-4 mb-4">
                                <div className="book-chapter">
                                    <span className="free-badge">FREE</span>
                                    <figure>
                                        <img src="images/chapter-01.png" alt="chapter 01"/>
                                    </figure>
                                    <h4>Chapter 1</h4>
                                    <p>Vivamus malesuada, urna vel volutpat dignissim, risus libero venenatis purus, nec
                                        interdum nulla nunc ut lorem. Proin lorem dolor, congue ut pulvinar vel, tempus
                                        eget
                                        nisi. Morbi eget sollicitudin ligula.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 mb-4">
                                <div className="book-chapter">
                                    <span className="free-badge">FREE</span>
                                    <figure>
                                        <img src="images/chapter-02.png" alt="chapter 02"/>
                                    </figure>
                                    <h4>Chapter 2</h4>
                                    <p>Morbi eget sollicitudin ligula. Cras dictum nibh nulla, ac placerat erat pharetra
                                        at.
                                        Vivamus nulla dolor, posuere quis convallis sed, auctor eget nisl.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 mb-4">
                                <div className="book-chapter">
                                    <figure>
                                        <img src="images/chapter-03.png" alt="chapter 03"/>
                                    </figure>
                                    <h4>Chapter 3</h4>
                                    <p>Fusce pretium augue non lacus cursus, at hendrerit ligula ultrices. Morbi at nunc
                                        sit
                                        amet est viverra lacinia at eget nunc. Sed scelerisque velit lectus, ut accumsan
                                        lorem tincidunt et.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 mb-4">
                                <div className="book-chapter">
                                    <figure>
                                        <img src="images/chapter-04.png" alt="chapter 04"/>
                                    </figure>
                                    <h4>Chapter 4</h4>
                                    <p>Donec eu metus eu enim aliquet auctor at non tellus. Suspendisse potenti. Fusce
                                        bibendum massa ut sapien placerat eleifend. Aenean feugiat purus pharetra mi
                                        finibus, ut elementum nisl cursus.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 mb-4">
                                <div className="book-chapter">
                                    <figure>
                                        <img src="images/chapter-05.png" alt="chapter 05"/>
                                    </figure>
                                    <h4>Chapter 5</h4>
                                    <p>Nulla dignissim auctor risus, eu porta nulla eleifend eu. Pellentesque semper
                                        imperdiet libero et consequat. Vestibulum odio nunc, blandit quis lacus vitae,
                                        luctus tincidunt eros felis eget enim imperdiet.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 mb-4">
                                <div className="book-chapter">
                                    <figure>
                                        <img src="images/chapter-06.png" alt="chapter 06"/>
                                    </figure>
                                    <h4>Chapter 6</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet
                                        scelerisque
                                        mauris. Sed ipsum massa, sagittis id vestibulum sed, aliquam at ligula. Nulla ut
                                        ipsum turpis.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 mb-4">
                                <div className="book-chapter">
                                    <figure>
                                        <img src="images/chapter-07.png" alt="chapter 07"/>
                                    </figure>
                                    <h4>Chapter 7</h4>
                                    <p>Nulla dignissim auctor risus, eu porta nulla eleifend eu. Pellentesque semper
                                        imperdiet libero et consequat. Vestibulum odio nunc, blandit quis lacus vitae,
                                        luctus tincidunt eros felis eget enim imperdiet.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 mb-4">
                                <div className="book-chapter">
                                    <figure>
                                        <img src="images/chapter-08.png" alt="chapter 08"/>
                                    </figure>
                                    <h4>Chapter 8</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet
                                        scelerisque
                                        mauris. Sed ipsum massa, sagittis id vestibulum sed, aliquam at ligula. Nulla ut
                                        ipsum turpis.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 mb-4">
                                <div className="book-chapter">
                                    <figure>
                                        <img src="images/chapter-09.png" alt="chapter 09"/>
                                    </figure>
                                    <h4>Chapter 9</h4>
                                    <p>Donec eu metus eu enim aliquet auctor at non tellus. Suspendisse potenti. Fusce
                                        bibendum massa ut sapien placerat eleifend. Aenean feugiat purus pharetra mi
                                        finibus, ut elementum nisl cursus.</p>
                                </div>
                            </div>

                        </div>

                        <div className="text-center mt-4 mb-4">
                            <a href="#" className="btn btn-lg btn-primary text-white">Purchase Book
                                for <del>$90</del> $45</a>
                        </div>

                    </div>
                </div>


                <div className="package">
                    <div className="container">

                        <div className="row justify-content-md-center text-center">
                            <div className="col-md-10">
                                <h2 className="h-lg mb-4">Yes! I Want This Book...</h2>
                                <p className="mb-4">Nulla dignissim auctor risus, eu porta nulla eleifend eu.
                                    Pellentesque
                                    semper imperdiet libero et consequat. Vestibulum odio nunc, blandit quis lacus
                                    vitae.
                                    Fusce sollicitudin sem a nunc dapibus, eu posuere odio finibus. Aenean sit amet
                                    vulputate lectus, at scelerisque nunc. Quisque interdum, mi nec dignissim fermentum,
                                    massa erat euismod eros.</p>
                                <h4>Just for this month you can get price 50% off & free merchandise</h4>
                                <p className="price-tag">
                                    <del>$90</del>
                                    $45
                                </p>
                                <h4 className="mb-5">Use this voucher code <mark
                                    className="text-warning">MASTERFBADS</mark> in place order
                                </h4>
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <figure className="text-center">
                                    <img src="images/tees.png" alt="Tees"/>
                                </figure>
                            </div>
                            <div className="col-md-1">
                                <figure className="text-center mb-4">
                                    <img src="images/plus.png" alt="plus"/>
                                </figure>
                            </div>
                            <div className="col-md-4">
                                <figure className="text-center">
                                    <img src="images/standing-book.png" alt="standing book"/>
                                </figure>
                            </div>
                            <div className="col-md-1 mb-4">
                                <figure className="text-center">
                                    <img src="images/plus.png" alt="plus"/>
                                </figure>
                            </div>
                            <div className="col-md-3">
                                <figure className="text-center">
                                    <img src="images/dvd.png" alt="DVD"/>
                                </figure>
                            </div>
                        </div>
                        <div className="text-center mt-3 mb-4">
                            <a href="#" className="btn btn-lg btn-primary text-white">Purchase Book Now</a>
                        </div>
                    </div>
                </div>

                <div className="faq">
                    <div className="container">
                        <h2 className="h-lg mb-5 text-center">You Can Ask Something<br/>Before You Buy</h2>
                        <div className="row justify-content-md-center">
                            <div className="col-md-10">
                                <div className="row">

                                    <div className="col-md-6 mb-4">
                                        <div className="accordion" id="accordionFaq">
                                            <div className="card">
                                                <div className="card-header" id="headingOne">
                                                    <h2 className="mb-0">
                                                        <button className="btn btn-link" type="button"
                                                                data-toggle="collapse" data-target="#collapseOne"
                                                                aria-expanded="true" aria-controls="collapseOne">
                                                            Fusce sollicitudin sem a nunc dapibus ?
                                                        </button>
                                                    </h2>
                                                </div>

                                                <div id="collapseOne" className="collapse show"
                                                     aria-labelledby="headingOne"
                                                     data-parent="#accordionFaq">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus
                                                        terry richardson ad squid. 3 wolf moon officia aute, non
                                                        cupidatat
                                                        skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                        eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                                        single-origin coffee nulla assumenda shoreditch et. Nihil anim
                                                        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                        sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                        Leggings
                                                        occaecat craft beer farm-to-table, raw denim aesthetic synth
                                                        nesciunt you probably haven't heard of them accusamus labore
                                                        sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingTwo">
                                                    <h2 className="mb-0">
                                                        <button className="btn btn-link collapsed" type="button"
                                                                data-toggle="collapse" data-target="#collapseTwo"
                                                                aria-expanded="false" aria-controls="collapseTwo">
                                                            Aenean sit amet vulputate lectus ?
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                                     data-parent="#accordionFaq">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus
                                                        terry richardson ad squid. 3 wolf moon officia aute, non
                                                        cupidatat
                                                        skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                        eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                                        single-origin coffee nulla assumenda shoreditch et. Nihil anim
                                                        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                        sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                        Leggings
                                                        occaecat craft beer farm-to-table, raw denim aesthetic synth
                                                        nesciunt you probably haven't heard of them accusamus labore
                                                        sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingThree">
                                                    <h2 className="mb-0">
                                                        <button className="btn btn-link collapsed" type="button"
                                                                data-toggle="collapse" data-target="#collapseThree"
                                                                aria-expanded="false" aria-controls="collapseThree">
                                                            Blandit odio ipsum eget orci ?
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div id="collapseThree" className="collapse"
                                                     aria-labelledby="headingThree"
                                                     data-parent="#accordionFaq">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus
                                                        terry richardson ad squid. 3 wolf moon officia aute, non
                                                        cupidatat
                                                        skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                        eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                                        single-origin coffee nulla assumenda shoreditch et. Nihil anim
                                                        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                        sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                        Leggings
                                                        occaecat craft beer farm-to-table, raw denim aesthetic synth
                                                        nesciunt you probably haven't heard of them accusamus labore
                                                        sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="accordion" id="accordionFaqq">
                                            <div className="card">
                                                <div className="card-header" id="headingFour">
                                                    <h2 className="mb-0">
                                                        <button className="btn btn-link" type="button"
                                                                data-toggle="collapse" data-target="#collapseFour"
                                                                aria-expanded="true" aria-controls="collapseFour">
                                                            Etiam malesuado metus elementum ?
                                                        </button>
                                                    </h2>
                                                </div>

                                                <div id="collapseFour" className="collapse show"
                                                     aria-labelledby="headingFour" data-parent="#accordionFaqq">
                                                    <div className="card-body">
                                                        Suspendisse eu velit tempus, pellentesque lectus finibus,
                                                        tincidunt
                                                        nibh. Suspendisse in metus gravida, pretium mauris tristique,
                                                        placerat lorem. Nunc interdum diam a rutrum eleifend. Nam
                                                        suscipit
                                                        magna et tortor mollis ornare. Maecenas feugiat feugiat nisl at
                                                        mollis. Duis aliquet molestie erat ac egestas. Curabitur laoreet
                                                        posuere augue, at mattis libero interdum sed.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingFive">
                                                    <h2 className="mb-0">
                                                        <button className="btn btn-link collapsed" type="button"
                                                                data-toggle="collapse" data-target="#collapseFive"
                                                                aria-expanded="false" aria-controls="collapseFive">
                                                            Aenean sit amet vulputate lectus ?
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div id="collapseFive" className="collapse"
                                                     aria-labelledby="headingFive"
                                                     data-parent="#accordionFaqq">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus
                                                        terry richardson ad squid. 3 wolf moon officia aute, non
                                                        cupidatat
                                                        skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                        eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                                        single-origin coffee nulla assumenda shoreditch et. Nihil anim
                                                        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                        sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                        Leggings
                                                        occaecat craft beer farm-to-table, raw denim aesthetic synth
                                                        nesciunt you probably haven't heard of them accusamus labore
                                                        sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingSix">
                                                    <h2 className="mb-0">
                                                        <button className="btn btn-link collapsed" type="button"
                                                                data-toggle="collapse" data-target="#collapseSix"
                                                                aria-expanded="false" aria-controls="collapseSix">
                                                            Blandit odio ipsum eget orci ?
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div id="collapseSix" className="collapse" aria-labelledby="headingSix"
                                                     data-parent="#accordionFaqq">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus
                                                        terry richardson ad squid. 3 wolf moon officia aute, non
                                                        cupidatat
                                                        skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                        eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                                        single-origin coffee nulla assumenda shoreditch et. Nihil anim
                                                        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                        sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                        Leggings
                                                        occaecat craft beer farm-to-table, raw denim aesthetic synth
                                                        nesciunt you probably haven't heard of them accusamus labore
                                                        sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <footer className="bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>Wagiman Tan</h2>

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
