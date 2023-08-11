import protection from '../../images/protection.png';

import { Link } from 'react-router-dom';

const FooterMobile= () => {
    return(
        <div className="row d-md d-lg-none mobile-footer justify-content-center">
            <div className="col-md-4 col-6"><Link to="ob-nam">Об нам</Link></div>
            <div className="col-md-4 col-6"><Link to="ob-nam#support">Поддержать проект</Link></div>
            <div className="col-md-4 col-6"><a href="ob-nam#contact">Почта для связи</a></div>
            <div className="col-md-12"><p>Этот сайт вместе с его содержимым охраняется авторским правом и левом, а еще пищащими воротами как в магазине или метре (во как!)</p>
                <img src={protection} alt="Копирайт" />
            </div>
        </div>
    )
}

export default FooterMobile;
