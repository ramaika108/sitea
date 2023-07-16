import visitorezik from '../images/visitorezik.png';
import stayezik from '../images/stayezik.png';
import readerezik from '../images/readerezik.png';
import netezik from '../images/netezik.png';

const SiteStatistics = () => {

    let stat = {
        visitors: 50,
        stayers: 20,
        readers: 0,
        online: 0,
    }

    return(
    <ul className="usefull-item__stat">
        <li>Сегодня забегало: <span>{stat.visitors}</span> ежей <img src={visitorezik} alt="Проходимец" /></li>
        <li>Осталось на сайте: <span>{stat.stayers}</span> ежей <img src={stayezik} alt="Постоялец" /></li>
        <li>Что то читали: <span>{stat.readers}</span> ежей<br />(ёж не читатель, еж писатель)<img src={readerezik} alt="Писатель" /></li>
        <li>В сети: <span>{stat.online}</span> ежей<br />({ stat.online ===0 ?'наших в сети не поймаешь': 'ну попались несколько, со всеми бывает, скоро порвут сеть как Тузик грелку и сбегут'}) <img src={netezik} alt="Рыбачёк" /></li>
    </ul>

)
}

export default SiteStatistics;
