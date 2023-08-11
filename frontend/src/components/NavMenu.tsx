import { useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

import Disclaimer from './Disclaimer';

import molar from '../images/molar.png';
import officant from '../images/officant.png';

import img1 from '../images/zver.png';
import img2 from '../images/posvetuchik.png';
import img3 from '../images/goroskop.png';
import img4 from '../images/blohs.png';
import img5 from '../images/shvabra.png';
import img6 from '../images/net-ezik.png';

type Page = {
    text: string
    img: string,
    info: string,
}

interface Dictionary<T> {
   [Key: string]: T;
}


const NavMenu = () => {
    const location = window.location.pathname
    const [activePage, setActivePage] = useState<Page>();
    let currentLocation = useLocation();

    const [showDisclaimer, setShowDisclaimer] = useState(true);

    useEffect( () => {
        setActivePage(pages[location as keyof Page])
    }, [currentLocation])

    const pages:Dictionary<Page>= {
        '/': {
            text: 'Главная страница', img: img1, info: 'Следы виданных зверей ↑',
        },
        '/afonarizms': {
            text: 'Афонаризмы', img: img2, info: 'Афонаризмы, это такие бумажки с закарючками, которые раньше приклеиввли под фонарики',
        },
        '/horoscope': {
            text: 'Гороскоп', img: img3, info: 'Гороскоп это прибор для наблюдения за горами',
        },
        '/blohs': {
           text: 'Блох', img: img4, info: 'Нам на сайте блох не нужен!',
        },
        '/kolonka': {
            text: 'Колонка', img: img5, info: 'Ходють тут всякие, топчуть!',
        },
        '/ob-nam': {
            text: 'Об нам', img: img6, info: 'Не ловись рыбка никакая, мы тебя все равно не едим...',
        }
    }

    const navMenu = (
        <nav>
            <ul className="top-menu">
                {Object.keys(pages).map((page) => {
                    if (activePage?.text === pages[page].text){
                        return(<li key={page} className='top-menu__item--active'>{pages[page].text}</li>)
                    }
                    return(<li key={page}><Link to={page} className="ez-link">{pages[page].text}</Link></li>)
                }
                )}
            </ul>
        </nav>
        )


    return(
        <header className="main-header">
            <div className="container">
                <div className="row main-header__top">
                    <div className="col-md-4 main-header__logo-wrap">
                        <Link to='/' className="main-header__logo">
                            Ёж<span>и</span>чест<span>ь</span>во<span>!</span>
                        </Link>
                    </div>

                    <div className="col-md-8 main-header__right">
                        {navMenu}
                    </div>

                </div>
                <div className="row">
                    <div className="col-12 main-header__decoration">
                        <img src={molar} alt="Йожик" className="main-header__content-image" />
                        <div className="main-header__footprints" />
                        <div className="main-header__decoration-right">
                            <img src={activePage?.img} alt="Ещё йожик" className="main-header__content-image" />
                        </div>
                        <p className="main-header__content-text">{activePage?.info}</p>
                    </div>
                    <div className="col-md-12">
                    </div>
                </div>
            </div>
            {showDisclaimer && <Disclaimer setter={setShowDisclaimer} />}

            <div className="main-header__mobile">
                <p className="main-header__content-text">Рекомендую попробовать наше фирменное блюдо, “Вафельное полотенце”</p>
                <img src={officant} alt="Ещё йожик" />
            </div>
        </header>

    );
}

export default NavMenu;
