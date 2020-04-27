import React, {useEffect, useState} from 'react';
import {useLocation, Link} from 'react-router-dom'

import {useWindowSize} from 'react-use'
import Confetti from "react-confetti";


const Complete = () => {
    const [session, setSession] = useState({});
    const location = useLocation();
    const sessionId = location.search.replace('?session_id=', '');
    const {width, height} = useWindowSize();


    useEffect(() => {
        async function fetchSession() {
            setSession(
                await fetch('/api/checkout-session?sessionId=' + sessionId).then((res) =>
                    res.json()
                )
            );
        }

        fetchSession();
    }, [sessionId]);


    return (
        <div className="intro">
            <div className="container pb-5 mb-sm-4">
                <div className="pt-5">
                    <Confetti width={width} height={height} numberOfPieces={450}/>
                    <div className="card py-3 mt-sm-3">
                        <div className="card-body text-center">
                            <h3 className="h4 pb-3">Bedankt voor je bestelling!</h3>
                            <p className="mb-2">Uw bestelling is geplaatst en wordt zo snel mogelijk
                                verwerkt.</p>
                            <p className="mb-2">Zorg ervoor dat u uw ordernummer noteert, dat
                                is <strong>{session.id}.</strong></p>
                            <p>U ontvangt binnenkort een e-mail met de bevestiging van uw bestelling. <u>U kunt
                                nu:</u>
                            </p>
                            <Link className="btn btn-secondary mt-3 mr-3" to="/">Terug naar homepagina</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Complete;