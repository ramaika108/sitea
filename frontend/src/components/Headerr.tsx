import { useState } from "react";
import { Link } from "react-router-dom";

import Disclaimer from "./Disclaimer";
import NavMenu from "./NavMenu";

import molar from "../images/molar.png";
import officant from "../images/officant.png";

type HeaderProps = {
  text: string;
  image: string;
};

const Header = ({ text, image }: HeaderProps) => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  return (
    <header className="main-header">
      <div className="container">
        <div className="row main-header__top">
          <div className="col-md-4 main-header__logo-wrap">
            <Link to="/" className="main-header__logo">
              Ёж<span>и</span>чест<span>ь</span>во<span>!</span>
            </Link>
          </div>

          <div className="col-md-8 main-header__right">
            <NavMenu />
          </div>
        </div>
        <div className="row">
          <div className="col-12 main-header__decoration">
            <img
              src={molar}
              alt="Йожик"
              className="main-header__content-image"
            />
            <div className="main-header__footprints" />
            <div className="main-header__decoration-right">
              <img
                src={image}
                alt="Ещё йожик"
                className="main-header__content-image"
              />
            </div>
            <p className="main-header__content-text">{text}</p>
          </div>
          <div className="col-md-12"></div>
        </div>
      </div>
      {showDisclaimer && <Disclaimer setter={setShowDisclaimer} />}

      <div className="main-header__mobile">
        <p className="main-header__content-text">
          Рекомендую попробовать наше фирменное блюдо, “Вафельное полотенце”
        </p>
        <img src={officant} alt="Ещё йожик" />
      </div>
    </header>
  );
};

export default Header;
