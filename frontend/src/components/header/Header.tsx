import { useState} from 'react';

import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';
import HeaderMobile from './HeaderMobile';
import Disclaimer from '../Disclaimer';

import { pages } from '../../pages/pages';


type Page = {
    text: string
    img: string,
    info: string,
}

interface Dictionary<T> {
   [Key: string]: T;
}


const Header = () => {
    const [showDisclaimer, setShowDisclaimer] = useState(true);

    return(
        <header className="main-header">
            <div className="container">
                <HeaderTop />
                <HeaderBottom />
                <HeaderMobile />
            </div>

            {showDisclaimer && <Disclaimer setter={setShowDisclaimer} />}
        </header>

    );
}

export default Header;
