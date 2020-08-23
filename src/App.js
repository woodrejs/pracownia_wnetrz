import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./app/pages/Home";
import About from "./app/pages/About";
import Contact from "./app/pages/Contact";
import Gallery from "./app/pages/Gallery";
import CMS from "./app/pages/CMS";
import Offer from "./app/pages/Offer";
import Nav from "./app/components/Nav";
import Copywriter from "./app/components/Copywriter";
import firebase from "firebase";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  //get data from firebase

  const db = firebase.firestore();
  const [data, setData] = useState(null);

  const getData = async () => {
    const data = {};
    const snap = await db.collection("cms").get();
    snap.forEach((item) => {
      data[item.id] = item.data();
    });
    setData(data);
  };

  if (data) {
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
          <Route path="/admin">
            <CMS data={data} />
          </Route>
        </Switch>

        <Copywriter />
      </Router>
    );
  } else {
    getData();
    return <div>loading...</div>;
  }
};

export default App;
