import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Fetch from '../components/Fetch';
import Pagination from '../components/Pagination';

import { randomInt } from '../utils/functions';

const HumorPump = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    interface Puddle {
        id: string;
        body: string;
    }

    interface Data {
        puddles: Puddle[];
        pagination: any;
    }

    const [puddles, setPuddles] = useState<Data>();
    let page = searchParams.get('page');

    useEffect(() => {
        Fetch(`/api/v1/humor-pump?page=${page}`, setPuddles);
    }, [page]);

    useEffect(() => {
        Fetch("/api/v1/humor-pump", setPuddles);
    }, []);

    return(
        <main className="humor-pump-page" id="top">
            <div className="container">
                <div className="humor-pump-page__heading">Колонка юмора</div>

                <div className="row humor-pump-page__content">
                    {puddles && puddles.puddles.map((puddle: Puddle) => (
                    <div className="col-xl-4 col-md-6 col-sm-6 humor-pump-page__item" key={puddle.id}>
                        <div className="humor-pump-page__item-wrap" style={{transform: `rotate(${randomInt(-5, 5)}deg)`, borderRadius: `${randomInt(30, 130)}px ${randomInt(30, 130)}px ${randomInt(30, 130)}px ${randomInt(30, 130)}px`}}> 
                            <p>{puddle.body}</p>
                            <div className="copy-btn">Копировать 📋</div>
                        </div>
                    </div>
            ) )}
                </div>
                <Pagination pagination={puddles?.pagination} color='light' extraClass='humor-pump-page-pagination' />
            </div>
        </main>
    )

}

export default HumorPump;
