import protection from '../../images/protection.png';
import support from '../../images/support.png';
import pizon from '../../images/pizon.png';

import { Link } from 'react-router-dom';

const FooterDesktop = () => {
    return(
        <div className="row d-none d-lg-flex">

            <nav className="col-12">
                <ul className="main-footer__menu">
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/blohs">Блох</Link></li>
                    <li><Link to="/afonarizms">Афонаризмы</Link></li>
                    <li><Link to="/horoscope">Гороскоп</Link></li>
                    <li><Link to="/humor-pump">Колонка юмора</Link></li>
                    <li><Link to="/ob-nam">Об нам</Link></li>
                </ul>
            </nav>

            <div className="col-md-4 col-sm-6 col-xs-6 main-footer__item">
                <p>Этот сайт вместе с его содержимым охраняется авторским правом и левом, а еще пищащими воротами как в магазине или метре (во как!)</p>
                <img src={protection} alt="Копирайт" />
            </div>

            <div className="col-md-4 col-sm-6 col-xs-6 main-footer__item">
                <p>Хотите поддержать проект или просто узнать о нас побольше? Тыкайте сюда ↓</p>
                <Link to="ob-nam/support" className="ez-link">
                    <img src={support} alt="Поддержать" />
                </Link>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-6 main-footer__item">
                <p>Есть вопрос, жалоба, или дельное предложение? Не стесняйся пиши нам на почту, слава Богу, почтовые голуби у нас пока есть, тфу тфу тфу. <a href="#" className="ez-link">zalobi_i_ne_toko@ezichestvo.ru</a></p>
                <img src={pizon} alt="Почта" />
            </div>

        </div>
    )
}

export default FooterDesktop;
