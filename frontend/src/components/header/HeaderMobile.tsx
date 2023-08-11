import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import officant from "../../images/officant.png";

import { Page } from "../types";
import { pages } from "../../pages/pages";

const HeaderMobile = () => {
  const [activePage, setActivePage] = useState<Page>();
  const currentLocation = useLocation();

  useEffect(() => {
    setActivePage(pages[currentLocation.pathname as keyof Page]);
  }, [currentLocation]);
  //<p className="main-header__content-text">Рекомендую попробовать наше фирменное блюдо, “Вафельное полотенце”</p>

  return (
    <div className="main-header__mobile">
      <div className="mobile-menu__toggle">
        <ul className="mobile-menu__list">
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/blohs">Блох</Link>
          </li>
          <li>
            <Link to="/afonarizms">Афонаризмы</Link>
          </li>
          <li>
            <Link to="/horoscope">Гороскоп</Link>
          </li>
          <li>
            <Link to="/humor-pump">Колонка юмора</Link>
          </li>
          <li>
            <Link to="/ob-nam">Об нам</Link>
          </li>
        </ul>
      </div>
      <img src={officant} alt="Ещё йожик" />
    </div>
  );
};

export default HeaderMobile;
