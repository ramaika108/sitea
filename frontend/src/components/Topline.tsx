import { useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import menuEz from '../images/menu_ez.png';
import angleDown from '../images/angle-down-solid.svg';

type page = {
    title: string,
    text: string
}



const Topline = () => {
    const location = window.location.pathname
    const [active, setActive] = useState('/')
    let currentLocation = useLocation();

    useEffect( () => {
        setActive(location)
    }, [currentLocation])

    const pages:page[] = [
        {title:'/', text: 'Главная страница'},
        {title: '/afonarizms', text: 'Афонаризмы'},
        {title: '/blohs', text: 'Блох'},
        {title: '/vsyaka', text: 'Всяка'},
        {title: '/ob-nam', text: 'Об нам'},
    ]

    const [topMenuState, setTopMenuState] = useState(window.innerWidth >= 992 ? 'flex' : 'none')
    const toggleMenu = () => {
        if (topMenuState === 'none'){
            setTopMenuState('flex')
        } else {
            setTopMenuState('none')
        }
    }

    return(
		<div className="top-line" id="top-line">
			<div className="top-line__menu-wrapper">
                {active!=='/' ? 
                    (<div className="logo"><Link to='/'>Ёжичество</Link></div>)
                    :
                    (<div className="logo">Ёжичество</div>)}
				<nav>
					<div className="top-line__menu">				
                        <div className="top-menu--m" onClick={toggleMenu}>
                            Меню<img src={angleDown} alt=""/>
						</div>
                        <ul className="top-menu" style={{display: topMenuState}}>
                            {pages.map((p) => {
                                if (active === p.title){
                                    return(
                                        <li key={p.title} className='top-menu__item--active'>{p.text}</li>
                                    )
                                }
                                return(
                                    <li key={p.title}><Link to={p.title} className="ez-link">{p.text}</Link></li>
                                )
                            }
                            )}
						</ul>
					</div>
				</nav>

			</div>
            <img src={menuEz} alt="Ёж с валиком" className="menu-ez" />
		</div>
    );
}

export default Topline;
