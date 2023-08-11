import { Link, useLocation } from 'react-router-dom';

interface MenuItemProps {
    text:string;
    link:string;
}

const MenuItem = ({text, link}:MenuItemProps) => {
    const location = useLocation();
    if (link === location.pathname){
        return(
        <li className='top-menu__item--active'>{text}</li>
        )
    } else {
        return(
            <li><Link to={link} className="ez-link">{text}</Link></li>
        )
    }
}

export default MenuItem;
