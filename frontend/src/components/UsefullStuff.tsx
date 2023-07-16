import predictor from '../images/predictor.png';
import pump from '../images/pump/pump.png';
import pumpHandleWithEz from '../images/pump/pump-handle-with_ez.png';

import {Link} from "react-router-dom";
import SiteStatistics from './SiteStatistics';


const UsefullStuff = () => {

    return(
		<section className="usefull-stuff">
			<div className="container">
				<h3 className="usefull-stuff__heading">Полезные штуковины</h3>
				<div className="row">

					<div className="col-md-4 usefull-stuff__item">
						<h4 className="usefull-item__heading">Ежидневный гороскоп</h4>
						<div className="usefull-item__content">
							<p>(Для тех кто не в курсе, гороскоп это прибор для наблюдения за горами)</p>
							<div data-micromodal-open="modal-horoscope" className="usefull-item__button">
                                <img src={predictor} alt="Провидец" />
								<h4>Крутнуть</h4>
							</div>
						</div>
					</div>

					<div className="col-md-4 usefull-stuff__item">
						<h4 className="usefull-item__heading">Статистика сайта</h4>
						<div className="usefull-item__content">
                            <SiteStatistics />
							</div>
						</div>
						<div className="col-md-4 usefull-stuff__item">
							<h4 className="usefull-item__heading">Колонка юмора</h4>
							<div className="usefull-item__content">
								<p>(Накачай себе хорошего настроения на сейчас и про запас. Нажми на ручку колонки)</p>
                                <div className="humor-pump" data-micromodal-open="modal-humor-pump">
                                    <img src={pump} alt="Колонка юмора" />
                                    <img src={pumpHandleWithEz} alt="Оператор колонки" className="humor-pump__worker" />
								</div>
							</div>
						</div>

					</div>
                    <div className="usefull-stuff__show-more"><Link to="vsyaka" className="ez-link--underline">Больше всяки ---{'>'}</Link></div>

				</div>
		</section>
    )
}

export default UsefullStuff;
