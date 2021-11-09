import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Films from "./components/Films";
import SingleFilm from "./components/SingleFilm";
import People from "./components/People";
import SinglePerson from "./components/SinglePerson";

export default function App() {
    return (
        <Router>
            <div className="container">
                <Navbar />
                
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/films">
                        <Films />
                    </Route>
                    <Route exact path="/films/:filmid">
                        <SingleFilm />
                    </Route>
                    <Route exact path="/people">
                        <People />
                    </Route>
                    <Route exact path="/people/:personid">
                        <SinglePerson />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
