import { useState, useEffect } from 'react';
import Fetch from "../Fetch";

import arrow from '../../images/arrow.png';
import calendarezki from '../../images/calendarezki.png';

import { Horoscope } from '../types';

const HoroscopeModal = () => {
    const [showDetails, setShowDetails] = useState(false)
    const [horoscope, setHoroscope] = useState<Horoscope>()

    const randomAngle = Math.random() * (800 - 180) + 180;

    useEffect(() => {
        let shownToday = wasShownToday()
        if (shownToday) {
            showCached()
        } else {
            showNew()
        }
    }, [])

    const wasShownToday = () => {
        let currentDate =  new Date().setHours(0,0,0,0).toString();
        let lastShownDate = localStorage.getItem('horoscopeDate')
        if (currentDate === lastShownDate) return true
        return false
    }

    const showCached = () => {
        setShowDetails(true)
        let storedHoroscope:string|null= localStorage.getItem('horoscope')
        if (storedHoroscope) {
            let tmpHoroscope:Horoscope = JSON.parse(storedHoroscope)
            setHoroscope(tmpHoroscope)
        }
    }

    const showNew = () => {
        Fetch('/api/v1/horoscope', setHoroscope)
        setTimeout(setShowDetails, 3000, true)
        localStorage.setItem('horoscopeDate', new Date().setHours(0,0,0,0).toString())
    }

    useEffect(() => {
        if (horoscope){
            localStorage.setItem('horoscope', JSON.stringify(horoscope))
        }
    }, [horoscope])

    return(
		<div className="modal micromodal-slide horoscope" id="modal-horoscope" aria-hidden="true">
			<div className="modal__overlay" tabIndex={-1} data-micromodal-close>
				<div className="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
					<header className="modal__header">
						<button className="modal__close" aria-label="Close modal" data-micromodal-close></button>
						<h2 className="modal__title" id="modal-1-title">
							Ежидневный гороскоп
						</h2>
					</header>
					<div className="horoscope__content">
						<div className="content__wheel">
							<ul className="wheel__options">
								<li>Хорошо</li>
								<li>Плохо</li>
								<li>Норм</li>
								<li>Как обычно</li>
								<li>ХЗ</li>
								<li>Обалденно</li>
							</ul>
                            {showDetails &&<img src={arrow} alt="Стрелка судьбы" style={{transform: `rotate(${randomAngle}deg)`}} />}
						</div>
						<div className="content__desc">
                            <p>Приходите за следующим предсказанием завтра</p>
                            <img src={calendarezki} alt="Опереатор гороскопа" />
                            {showDetails && (<div className="horoscope-detail-wrapper">
							<h4>Детальный разбор:</h4>
							<ul>
                                <li>Погода: {horoscope?.weather}</li>
                                <li>Настроение: {horoscope?.mood}</li>
                                <li>Завтрак: {horoscope?.breakfast}</li>
                                <li>Обед: {horoscope?.lunch}</li>
                                <li>Ужин: {horoscope?.supper}</li>
                                <li>Ночной дожор: {horoscope?.night}</li>
                                <li>Важные дела: {horoscope?.tasks}</li>
                                <li>Дополнительные советы: {horoscope?.advise}</li>
                                <li>Покровитель дня: {horoscope?.pokrov}</li>
                            </ul>
                            </div>)}
							</div>
						</div>
					</div>
				</div>
			</div>

        )
}


export default HoroscopeModal;
