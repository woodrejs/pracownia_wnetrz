import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./app/pages/Home";
import About from "./app/pages/About";
import Contact from "./app/pages/Contact";
import Gallery from "./app/pages/Gallery";
import Offer from "./app/pages/Offer";
import Nav from "./app/components/Nav";

const App = () => {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/portfolio">
          <Home />
        </Route>
        <Route path="/offers">
          <Home />
        </Route>
        <Route path="/offer">
          <Offer />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
