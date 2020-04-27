import React from 'react';
import {Link} from "react-router-dom";

const Canceled = () => {
    return (
        <div className="intro">
            <div className="container pb-5 mb-sm-4">

                <div className="pt-5">
                    <div className="card py-3 mt-sm-3">
                        <div className="card-body text-center">
                            <h3 className="h4 pb-3">Uw betaling is geannuleerd, probeer het opnieuw</h3>

                            <Link className="btn btn-secondary mt-3 mr-3" to="/">Ga terug naar de
                                homepagina</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Canceled;