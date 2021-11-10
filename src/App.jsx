import React from "react"; 
import {
    BrowserRouter, //must wrap and contain all your components
    Switch, //wraps individual routes and ensures only one Route will be rendered 
    Route //defines the path in url bar to look to render a certain component
} from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Films from "./components/Films";
import SingleFilm from "./components/SingleFilm";
import People from "./components/People";
import SinglePerson from "./components/SinglePerson";

 const App = () => {
    return (
      <BrowserRouter>
            <div className="container">
              <div className="border border-primary" >
                <Navbar />
                </div>
                
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/films">
                        <Films />
                    </Route>
                    <Route exact path="/films/:filmid"> {/* placeholder for parameter */}
                        <SingleFilm />
                    </Route>
                    <Route exact path="/people">
                        <People />
                    </Route>
                    <Route exact path="/people/:personid"> 
                        <SinglePerson />
                    </Route>
                    
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App 