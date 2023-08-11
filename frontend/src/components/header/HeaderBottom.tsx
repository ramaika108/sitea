import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import molar from "../../images/molar.png";
import newseziks from "../../images/bloh-1.png";

import { Page } from "../types";
import { pages } from "../../pages/pages";

const HeaderBottom = () => {
  const [activePage, setActivePage] = useState<Page>();
  const currentLocation = useLocation();

  useEffect(() => {
    setActivePage(pages[currentLocation.pathname as keyof Page]);
  }, [currentLocation]);

  return (
    <div className="row main-header__bottom">
      <div className="col-12 main-header__decoration">
        <img src={molar} alt="Йожик" className="main-header__content-image" />
        <div className="main-header__footprints" />
        <div className="main-header__decoration-right">
          <img
            src={activePage?.img || newseziks}
            alt="Ещё йожик"
            className="main-header__content-image"
          />
        </div>
        <p className="main-header__content-text">{activePage?.info}</p>
      </div>
      <div className="col-md-12"></div>
    </div>
  );
};

export default HeaderBottom;
