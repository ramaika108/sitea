import { Link } from "react-router-dom";

import MenuItem from "../MenuItem";

import { Page, Dictionary } from "../types";

const HeaderTop = () => {
  return (
    <div className="row main-header__top">
      <div className="col-md-4 main-header__logo-wrap">
        <Link to="/" className="main-header__logo">
          Ёж<span>и</span>чест<span>ь</span>во<span>!</span>
        </Link>
      </div>

      <div className="col-md-8 main-header__right">
        <nav>
          <ul className="top-menu">
            <MenuItem text="Главная страница" link="/" />
            <MenuItem text="Блох" link="/blohs" />
            <li className="top-menu__dropdown">
              Всяка
              <ul className="top-menu__dropdown-content">
                <MenuItem text="Афонаризмы" link="/afonarizms" />
                <MenuItem text="Гороскоп" link="/horoscope" />
                <MenuItem text="Колонка юмора" link="/humor-pump" />
              </ul>
            </li>
            <MenuItem text="Об нам" link="/ob-nam" />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderTop;
