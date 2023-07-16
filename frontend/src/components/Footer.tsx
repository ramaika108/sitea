import ezArrays from '../images/ez-arrays.png';
import support from '../images/support.png';
import pizon from '../images/pizon.png';
import path from '../images/path.png';
import protection from '../images/protection.png';
import socNet from '../images/soc-net.png';

import { Link } from 'react-router-dom';

const Footer = () => {
    return(

		<footer className="main-footer">
			<div className="container">
				<div className="row d-none d-lg-flex">

					<div className="col-md-4 col-sm-6 col-xs-6 main-footer__item">
                        <p>Подробнее узнать о нас и возможно даже вступить в наши ряды можно <Link to="ob-nam/join" className="ez-link">тыкнув сюда</Link></p>
                        <img src={ezArrays} alt="Вступить" />
					</div>

					<div className="col-md-4 col-sm-6 col-xs-6 main-footer__item">
                        <p>Хотите поддержать проект? Для начала <Link to="ob-nam/support" className="ez-link">ткните сюда</Link></p>
                        <img src={support} alt="Поддержать" />
					</div>

					<div className="col-md-4 col-sm-6 col-xs-6 main-footer__item">
						<p>Есть вопрос, жалоба, или дельное предложение? Не стесняйся пиши нам на почту, слава Богу, голуби у нас пока есть, тфу тфу тфу. <a href="#" className="ez-link">zalobi_i_ne_toko@ezichestvo.ru</a></p>
                        <img src={pizon} alt="Почта" />
					</div>


					<div className="col-md-4 col-sm-6 col-xs-6 main-footer__item">
                        <p>Сайт создавал наш собрат, вот короткая тропинка до его уголка в интернете <a href="https://raar-prog.ru" className="ez-link" target="_blank">raar-prog.ru</a> (передавайте привет волку и красной шапочке по пути)</p>
                        <img src={path} alt="Тропинка" />
					</div>


					<div className="col-md-4 col-sm-6 col-xs-6 main-footer__item">
						<p>Этот сайт вместе с его содержимым охраняется авторским правом и левом, а еще пищащими воротами как в магазине или метре (во как!)</p>
                        <img src={protection} alt="Копирайт" />
					</div>


					<div className="col-md-4 col-sm-6 col-xs-6 main-footer__item">
						<p>В социальных сетях нас нету. Что мы дурные сами лезть в сети? И ладно если бы там что то вкусное было...</p>
                        <img src={socNet} alt="Ловись рыбка, большая и маленькая" />
					</div>

				</div>

				<div className="row d-md d-lg-none mobile-footer">
					<div className="col-md-4 col-6"><Link to="ob-nam">Об нам</Link></div>
                    <div className="col-md-4 col-6"><Link to="ob-nam/support">Поддержать проект</Link></div>
					<div className="col-md-4 col-6"><a href="#">Почта для связи</a></div>
                    <div className="col-md-12 col-6">Сайт собрата программиста <a href="https://raar-prog.ru" target="_blank">raar-prog.ru</a></div>
					<div className="col-md-12"><p>Этот сайт вместе с его содержимым охраняется авторским правом и левом, а еще пищащими воротами как в магазине или метре (во как!)</p>
                        <img src={protection} alt="Копирайт" />
					</div>
				</div>

			</div>
			<div className="main-footer__to-top"><a href="#top-line">Наверх /\</a></div>
			<p className="main-footer__copyright">2022 © Ezichestvo</p>
		</footer>
    )
}

export default Footer;
