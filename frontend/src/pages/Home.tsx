import news1 from '../images/mailez.png';
import news2 from '../images/newseziks.png';

import {Link} from "react-router-dom";
import BlohList from '../components/BlohList';
import UsefullStuff from '../components/UsefullStuff';
import ModalWrapper from '../components/modals/ModalWrapper';
import HoroscopeModal from '../components/modals/HoroscopeModal';
import HumorPumpModal from '../components/modals/HumorPumpModal';

import MicroModal from 'micromodal';
import {useEffect, useState} from 'react';
import Fetch from '../components/Fetch';
import {Posts} from '../components/types';

const Home = () => {

    useEffect( () => {
        MicroModal.init({
        openTrigger: 'data-micromodal-open',
        closeTrigger: 'data-micromodal-close',
        disableScroll: true,
        disableFocus: true,
        awaitOpenAnimation: true,
        awaitCloseAnimation: true
        })
    } )

    const [posts, setPosts] = useState<Posts>();

    useEffect( () => {
        Fetch("/api/v1/blohs", setPosts)
    },[])


    return(

    <div >
            <div className="container">
                <section className="historical-note">
                    <h3 className="historical-note__heading">Историческая справка</h3>
                    <p className="historical-note__text">Что такое Ёжичество? Если коротко, те это вероисповедание, которое зародилось в одной маленькой головке, одного маленького ёжика. Головка его была мала но в ней гулял сильный и очень вольный ветер (кто-то форточку забыл закрыть, получился сквозняк). С этого сквозняка то все и началось ... <Link to="ob-nam" className="ez-link--underline">Читать дальше {'>>'}</Link></p>
                </section>

                <section className="last-news">
                    <div className="last-news__heading-wrapper">
                        <img src={news1} alt="Почтальежик" />
                        <div className="last-news__heading">
                            <h3>Последние новости в Ежинном Государстве:</h3>
                            <p>(Людских границ ежи не признают и вольно перемещаются по всему земному шарику или блинчику. Ежинное Государство находится везде где есть ежики, то есть во всем мире кроме Австралии. <Link to="/ob-nam">Подробности туточки</Link>)</p>
                        </div>
                        <img src={news2} alt="Сарофанное радио" />
                    </div>
                    {posts && <BlohList blohs={posts.blohs}/>}
                    {!posts && (
                        <div className="bloh__alert"><h3>Ловим блохов...</h3></div>
                    )}

                    <div className="show-more"><Link to="blohs" className="ez-link--underline">Показать больше новостей ...</Link></div>
                </section>
            </div>

            <UsefullStuff />
            <ModalWrapper>
                <HoroscopeModal />
                <HumorPumpModal />
            </ModalWrapper>

        </div>
    )
}

export default Home;
