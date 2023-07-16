import Pagination from "../components/Pagination";
import pump from '../images/pump/pump.png';
import vsyaka from '../images/vsyaka.png';
import boat from '../images/boat.png';
import pumppHandleWithEz from '../images/pump/pump-handle-with_ez.png';
import astronom from '../images/astronom.png';
import patch from '../images/patch.png';
import tObschestvo from '../images/t-obschestvo.png';
import bloh1 from '../images/bloh-1.png';

import HoroscopeModal from "../components/modals/HoroscopeModal";
import HumorPumpModal from "../components/modals/HumorPumpModal";
import {useEffect, useState} from "react";

import MicroModal from "micromodal";
import ModalWrapper from "../components/modals/ModalWrapper";
import TSocietyModal from "../components/modals/TSocietyModal";
import JournalModal from "../components/modals/JournalModal";

const Vsyaka = () => {

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

    const showSociety = () =>{
        setShowSecret(true)
        setTimeout(() => {
            setShowSecret(false)
        }, 5000)
    }

    const [showSecret, setShowSecret] = useState(false)

    return(
        
	<div className="container">

				<div className="vsyaka__heading">
					<h3>Всяка</h3>
					<p>(все что не влезло на другие странички, но влезло в корман домовитым ёжикам)</p>
                    <img src={vsyaka} alt="Всяка кака" />
				</div>

				<div className="row vsyaka__items">

					<div className="col-lg-4 col-sm-6 vsyaka-item">
						<p className="vsyaka-item__decoration">&#9729;</p>
								<div className="humor-pump">
                                    <img src={pump} alt="Колонка юмора" />
                                    <img src={pumppHandleWithEz} alt="Оператор колонки" className="humor-pump__worker" />
								</div>
						<h4 className="vsyaka-item__title" data-micromodal-open="modal-humor-pump">Колонка юмора</h4>
					</div>

					<div className="col-lg-4 col-sm-6 vsyaka-item">
						<p className="vsyaka-item__decoration" style={{color: 'yellow'}}>☀</p>
                        <img src={boat} alt="Лодочка" />
						<h4 className="vsyaka-item__title" data-micromodal-open="modal-logbook">Бортовой журнал</h4>
					</div>

					<div className="col-lg-4 col-sm-6 vsyaka-item">
						<p className="vsyaka-item__decoration">★</p>
                        <img src={astronom} alt="Астроном, агроном, какая разница" />
						<h4 className="vsyaka-item__title" data-micromodal-open="modal-horoscope">Ежидневный гороскоп</h4>
					</div>


                    <div className="col-lg-4 col-sm-6 vsyaka-item">
						<div className="t-society" onMouseEnter={showSociety}>
                            <img src={patch} alt="Заплатка" />
                            <img src={tObschestvo} alt="Приятное ощущение тайны" />
						</div>
        {!showSecret && <h4 className="vsyaka-item__title">...</h4>}
        {showSecret && <h4 className="vsyaka-item__title" data-micromodal-open="modal-society">Тайное общество</h4>}
					</div>

				</div>
                <ModalWrapper>
                    <HumorPumpModal />
                    <HoroscopeModal />
                    <TSocietyModal />
                    <JournalModal />
                </ModalWrapper>

	</div>
    )
}

export default Vsyaka;
