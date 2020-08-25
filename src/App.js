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

//Initialize dotenv
require("dotenv").config();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY_FB,
  authDomain: "kahastudio-86981.firebaseapp.com",
  databaseURL: "https://kahastudio-86981.firebaseio.com",
  projectId: "kahastudio-86981",
  storageBucket: "kahastudio-86981.appspot.com",
  messagingSenderId: "675708655382",
  appId: "1:675708655382:web:6c4f6acd5bc24a57f66237",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const db = firebase.firestore();

  const [data, setData] = useState(null);
  const [offerType, setOfferType] = useState("mini");
  const [galleryName, setGalleryName] = useState(null);

  const handleOfferType = (type) => setOfferType(type);
  const handleGalleryName = (name) => setGalleryName(name);
  const getSize = () => {
    const width = window.innerWidth;
    if (width <= 736) {
      return "sm";
    } else if (width > 736 && width < 1025) {
      return "md";
    } else {
      return "lg";
    }
  };
  const getData = async () => {
    const data = {};

    db.collection("cms").onSnapshot(function (doc) {
      doc.forEach((item) => {
        data[item.id] = item.data();
      });
      setData(data);
    });
  };
  const size = getSize();

  if (data) {
    return (
      <Router>
        <Nav click={handleOfferType} />

        <Switch>
          <Route exact path="/">
            <Home
              data={data}
              offerUtils={{ type: offerType, click: handleOfferType }}
              galleryUtils={handleGalleryName}
              size={size}
            />
          </Route>
          <Route path="/about">
            <About data={data.about} size={size} />
          </Route>
          <Route path="/contact">
            <Contact data={data.contact} size={size} />
          </Route>
          <Route path="/portfolio">
            <Home
              data={data}
              offerUtils={{ type: offerType, click: handleOfferType }}
              galleryUtils={handleGalleryName}
              size={size}
            />
          </Route>
          <Route path="/offers">
            <Home
              data={data}
              offerUtils={{ type: offerType, click: handleOfferType }}
              galleryUtils={handleGalleryName}
              size={size}
            />
          </Route>

          <Route path="/mini">
            <Offer type={offerType} data={data.mini} size={size} />
          </Route>
          <Route path="/midi">
            <Offer type={offerType} data={data.midi} size={size} />
          </Route>
          <Route path="/maxi">
            <Offer type={offerType} data={data.maxi} size={size} />
          </Route>

          <Route path="/gallery">
            <Gallery data={data.gallery} name={galleryName} size={size} />
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
