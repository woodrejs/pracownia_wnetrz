import React from "react";
import "./index.scss";
import Logo from "../../components/Logo";
import Menu from "../../components/Menu";
import Social from "../../components/Social";

const Offer = () => {
  return (
    <>
      <div className="offer">
        <div className="offer__imageBox"></div>
        <div className="offer__menuBox">
          <Logo />
          <Menu />
        </div>
        <div className="offer__contentBox">
          <h2 className="offer__contentBox__title">PROJEKT MAXI</h2>
          <h3 className="offer__contentBox__price">50 -70 zł /m2</h3>
          <span className="offer__contentBox__price__info">
            Koszt projektu zależny jest od metrażu projektowanych pomieszczeń
          </span>
          <h4 className="offer__contentBox__subTitle">Zakres projektu:</h4>
          <p className="offer__contentBox__description">
            +rzuty funkcjonalne 2 D w 2-3 wariantach do wyboru <br /> +moodbard
            (zestawienie w formie planszy 2D) produktów i materiałów
            wykończeniowych <br />
            +wizualizacje 3D stworzone na podstawie zestawienia z moodboardu (w
            tym jedna darmowa zmiana aranżacji)
            <br /> +konsultacje architektoniczne dotyczące projektu
          </p>
        </div>
        <div className="offer__backBox">wróć</div>
      </div>
      <div className="offer__moreContent">
        <h3 className="offer__moreContent__title">Nadzór autorski:</h3>
        <p className="offer__moreContent__description">
          +Szczegółowy kosztorys prac wykończeniowych w pliku Excel
          <br /> +Koszty materiałów budowlanych rejestrowane na bieżąco w pliku
          Excel udostępnionym w chmurze
          <br /> +Logistyka zamówień produktów i materiałów wykończeniowych, a
          także materiałów budowlanych.
          <br /> +Częstotliwość wizyt na inwestycji to 3-4 razy w tygodniu
          kalendarzowym (jeśli jest potrzeba ekipa pracuje również w weekendy)
          <br /> +Wszystkie zamówienia i materiały budowlane organizujemy
          samodzielnie – dla Państwa to oszczędność czasu, oraz gotówki na
          ewentualne transporty.
          <br />
          +Przedstawienie wykonawcom założeń projektowych
          <br /> +Opracowanie harmonogramu prac wykończeniowych
          <br /> +Koordynacja prac związanych z procesem realizacji projektu
          <br /> +Weryfikacja dostaw materiałów pod kątem ich zgodności z
          zamówieniem, warunkami technicznymi oraz terminem dostawy <br />
          +Stała kontrola postępu prac wykonawczych, terminowości, ich jakości
          wykonania i zgodności z projektem <br />
          +Rozwiązywanie bieżących problemów projektowych związanych z
          prowadzonymi pracami <br />
          +Wprowadzanie ewentualnych zmian projektowych <br />
          +Stały kontakt z firmami realizującymi prace wykończeniowe w trakcie
          realizacji wnętrza
          <br /> +Informowanie o postępie prac oraz podjętych decyzjach
          <br /> +związanych z realizacją projektu
        </p>
      </div>
      <div className="offer__socialBox">
        <Social />
      </div>
      <div className="offer__copywriterBox">© Pracownia Wnętrz 2020</div>
    </>
  );
};

export default Offer;
