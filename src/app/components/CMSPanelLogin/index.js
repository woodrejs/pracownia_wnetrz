import React, { useRef } from "react";
import firebase from "firebase";
import "./index.scss";

const CMSPanelLogin = () => {
  const auth = firebase.auth();

  const mailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleBtn = () => {
    const email = mailRef.current.value;
    const password = passwordRef.current.value;

    auth.signInWithEmailAndPassword(email, password).catch(function (error) {
      alert("Niepoprawne dane");
    });
  };

  return (
    <div className="CMSPanelLogin">
      <div className="CMSPanelLogin__box">
        <label htmlFor="mail" className="CMSPanelLogin__label">
          email
          <input
            id="mail"
            ref={mailRef}
            type="email"
            className="CMSPanelLogin__input"
          />
        </label>
        <label htmlFor="password" className="CMSPanelLogin__label">
          hasło
          <input
            id="password"
            ref={passwordRef}
            type="password"
            className="CMSPanelLogin__input"
          />
        </label>
        <button className="CMSPanelLogin__btn" onClick={handleBtn}>
          zaloguj
        </button>
      </div>
    </div>
  );
};

export default CMSPanelLogin;
