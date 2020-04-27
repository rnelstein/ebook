import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Home from "./Home";
import Complete from "./Complete";
import Canceled from "./Canceled";
import NoMatch from "./NoMatch";




function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>


                <Route exact path="/complete">
                    <Complete />
                </Route>

                <Route exact path="/canceled">
                    <Canceled />
                </Route>

                <Route path="*">
                    <NoMatch />
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
