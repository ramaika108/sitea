import { useState, useEffect } from 'react';
import Fetch from "../components/Fetch";

import arrow from '../images/arrow.png';
import calendarezki from '../images/predictor.png';

import { HoroscopeType } from '../components/types';

const Horoscope = () => {

    const [showDetails, setShowDetails] = useState(false)
    const [horoscope, setHoroscope] = useState<HoroscopeType>()

    let randomAngle = Math.random() * (800 - 180) + 180

    useEffect(() => {
        let shownToday = wasShownToday()
        if (shownToday) showCached()
    }, [])

    const wasShownToday = () => {
        let currentDate =  new Date().setHours(0,0,0,0).toString()
        let lastShownDate = localStorage.getItem('horoscopeDate')
        if (currentDate === lastShownDate) return true
        return false
    }

    const showCached = () => {
        setShowDetails(true)
        let storedHoroscope:string|null= localStorage.getItem('horoscope')
        let storedAngle:string|null= localStorage.getItem('arrowAngle')
        if (storedHoroscope) {
            let tmpHoroscope:HoroscopeType = JSON.parse(storedHoroscope)
            setHoroscope(tmpHoroscope)
        }
        if (storedAngle) {
            randomAngle = +storedAngle
        }
    }

    const showNew = () => {
        Fetch('/api/v1/horoscope', setHoroscope)
        setShowDetails(true)
        localStorage.setItem('horoscopeDate', new Date().setHours(0,0,0,0).toString())
        localStorage.setItem('arrowAngle', randomAngle.toString())
    }

    useEffect(() => {
        if (horoscope){
            localStorage.setItem('horoscope', JSON.stringify(horoscope))
        }
    }, [horoscope])

    return(
        <main className='horoscope-page'>

            <div className="container">
                <h3>Ёжидневный гороскоп</h3>

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
                            <img src={arrow} alt="Стрелка судьбы" style={{transform: showDetails ? `rotate(${randomAngle}deg)` : 'none'}} />
                            {!showDetails && <button className="horoscope_button" onClick={showNew}>Крутнуть</button>}
						</div>
						<div className="content__desc">
                            <p>{showDetails ? 'Приходите за следующим предсказанием завтра' : 'Внимание этот очень технологичный прибор может предсказать то как пройдет ваш день. Предупреждаю, его предсказания сбываются всегда, как говорится “Не сегодня так завтра...”'}</p>
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
        </main>
    )
}

export default Horoscope;
