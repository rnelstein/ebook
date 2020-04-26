import React, {useEffect, useState} from 'react';
import {useLocation, useHistory, Link} from 'react-router-dom'
import axios from 'axios'
import {useWindowSize} from 'react-use'
import Confetti from "react-confetti";

const Complete = () => {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const {width, height} = useWindowSize();

    let query = new URLSearchParams(useLocation().search);
    let history = useHistory();

    let paymentIntentId = query.get("payment_intent");

    useEffect(() => {
        if (!paymentIntentId) history.push('/');

        axios.get("http://localhost:5000/api/payment-intent?paymentIntentId=" + paymentIntentId)
            .then((response) => {
                setIsLoaded(true);

                if (response.data.status !== 'succeeded') setStatus(false);
                setStatus(true)

            })
            .catch((error) => {
                setIsLoaded(true);
                console.log(error.response.data.message)
                setError(error.response.data.message);
            });
    }, []);


    if (error) return <div>Error: {error}</div>;
    if (!isLoaded) {
        return <div>Loading...</div>;
    } else

        return (

            <div className="container pb-5 mb-sm-4">
                <Confetti width={width} height={height} numberOfPieces={450}/>

                <div className="pt-5">
                    <div className="card py-3 mt-sm-3">
                        <div className="card-body text-center">
                            <h3 className="h4 pb-3">Bedankt voor je bestelling!</h3>
                            <p className="mb-2">Uw bestelling is geplaatst en wordt zo snel mogelijk verwerkt.</p>
                            <p className="mb-2">Zorg ervoor dat u uw ordernummer noteert, dat
                                is <strong>{paymentIntentId}.</strong></p>
                            <p>U ontvangt binnenkort een e-mail met de bevestiging van uw bestelling. <u>Je kan nu:</u>
                            </p>
                            <Link className="btn btn-secondary mt-3 mr-3" to="/">Ga terug naar homepagina</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default Complete;