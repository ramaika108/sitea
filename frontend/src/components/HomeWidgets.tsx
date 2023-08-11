import afonarister from '../images/afonarister.png';
import astronom from '../images/astronom.png';

import WidgetItem from "./WidgetItem";
import HumorPumpImg from './HumorPumpImg';


const HomeWidgets = () => {


    return(
		<section className="widgets">
            <div className="container">
                <div className="ez-heading widgets__vsyaka-heading">
                    <h3>Всяка</h3>
                    <p>(все что не влезло на другие странички, но влезло в карман домовитым ёжикам)</p>
                </div>
                <div className="row justify-content-center widgets__wrapper">

                    <WidgetItem img={afonarister} counter={3} heading={'Афонаризмы'} link={'afonarizms'} />

                    <WidgetItem img={astronom} heading={'Ёжидневный гороскоп'} link={'horoscope'} />

                    <WidgetItem counter={4} heading={'Колонка юмора'} link={'humor-pump'} >
                        {HumorPumpImg}
                    </WidgetItem>

                </div>
            </div>
		</section>
    )
}

export default HomeWidgets;
