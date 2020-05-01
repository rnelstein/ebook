import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Home from "./Home";
import Complete from "./Complete";
import Canceled from "./Canceled";
import NoMatch from "./NoMatch";
import withTracker from "./withTracker";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={withTracker(Home)}/>


                <Route exact path="/complete" component={withTracker(Complete)}/>

                <Route exact path="/canceled" component={withTracker(Canceled)}/>

                <Route path="*" component={withTracker(NoMatch)}/>


            </Switch>
        </Router>
    );
}

export default App;
