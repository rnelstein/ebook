import React from 'react';
import {Link} from "react-router-dom";

const NoMatch = () => {
    return (
        <div className="container pb-5">
            <div className="pt-5"><img className="d-block my-4 mx-auto" src="images/404.jpg" alt="404 Page not found"/>
            </div>
            <div className="pt-3 pb-2 text-center">
                <h1 className="h2">Pagina niet gevonden!</h1>
                <p className="text-muted">Het lijkt erop dat we de pagina die u zoekt niet kunnen vinden.&nbsp;
                    <Link className="font-weight-semibold" to="/">Ga terug naar de homepagina </Link></p>
            </div>
        </div>
    );
};

export default NoMatch;