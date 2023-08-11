import img1 from '../images/zver.png';
import img2 from '../images/posvetuchik.png';
import img3 from '../images/goroskop.png';
import img4 from '../images/blohs.png';
import img5 from '../images/shvabra.png';
import img6 from '../images/net-ezik.png';

import { Page, Dictionary } from '../components/types';

// Don't forget to change the menu in the "HeaderTop.tsx" in "components/header/"

export const pages:Dictionary<Page> = {
        '/': {
            img: img1, info: 'Следы виданных зверей ↑',
        },
        '/blohs': {
            img: img4, info: 'Нам на сайте блох не нужен!',
        },
        '/vsyaka': {
            img: img2, info: 'Афонаризмы, это такие бумажки с закарючками, которые раньше приклеиввли под фонарики',
        },
        '/afonarizms': {
            img: img2, info: 'Афонаризмы, это такие бумажки с закарючками, которые раньше приклеиввли под фонарики',
        },
        '/horoscope': {
            img: img3, info: 'Гороскоп это прибор для наблюдения за горами',
        },
        '/humor-pump': {
            img: img5, info: 'Ходють тут всякие, топчуть!',
        },
        '/ob-nam': {
            img: img6, info: 'Не ловись рыбка никакая, мы тебя все равно не едим...',
        }
    }
