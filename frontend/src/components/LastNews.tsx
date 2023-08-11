import { useState, useEffect } from 'react';
import BlohList from './BlohList';
import {Link} from "react-router-dom";
import {Posts} from './types';
import Fetch from './Fetch';

import news1 from '../images/mailez.png';
import news2 from '../images/newseziks.png';

const LastNews = () => {
    const [posts, setPosts] = useState<Posts>();

    useEffect( () => {
        Fetch("/api/v1/blohs", setPosts)
    },[])


    return(
        <div className="container">
            <section className="last-news">
                <div className="last-news__heading-wrapper">
                    <img src={news1} alt="Почтальежик" />
                    <div className="ez-heading">
                        <h3>Последние новости в Ежинном Государстве:</h3>
                        <p>(Людских границ ежи не признают и вольно перемещаются по всему земному шарику или блинчику. Ежинное Государство находится везде где есть ежики, то есть во всем мире кроме Австралии. <Link to="/ob-nam">Подробности туточки</Link>)</p>
                    </div>
                    <img src={news2} alt="Сарофанное радио" />
                </div>
                {posts && <BlohList blohs={posts.blohs}/>}
                {!posts && (
                    <div className="bloh__alert"><h3>Ловим блохов...</h3></div>
                )}

                <Link to="blohs" className="ez-link"><div className="show-more">Что там еще новенького...</div></Link>
            </section>
        </div>

    )
}

export default LastNews;
