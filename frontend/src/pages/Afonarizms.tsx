import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import Fetch from "../components/Fetch";
import Pagination from '../components/Pagination';

import { randomInt } from '../utils/functions';

const Afonarizms = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    interface Afonarizm {
        id: string;
        body: string;
    }

    interface Data {
        afonarizms: Afonarizm[];
        pagination: any
    }

    const [afonarizms, setAfonarizms] = useState<Data>();
    let page = searchParams.get('page')

    useEffect( () => {
        Fetch("/api/v1/afonarizms", setAfonarizms)
        console.log(afonarizms);
    },[])

    useEffect( () => {
        Fetch(`/api/v1/afonarizms?page=${page}`, setAfonarizms)
    },[page])

    return(
        <main className='afonarizm-page' id="top">

            <div className="container">
                <div className="afonarizm-page__heading">Ежинные афонаризмы</div>

                <div className="row afonarizm-page__content">
                    {afonarizms && afonarizms.afonarizms.map( (afonarizm:Afonarizm) => (
                    <div className="col-xl-4 col-md-6 col-sm-6 afonarizm-page__item" key={afonarizm.id}>
                        <div className="afonarizm-page__item-wrap" style={{transform: `rotate(${randomInt(-5, 5)}deg)`}}> 
                            <p>{afonarizm.body}</p>
                            <div className="copy-btn">Копировать 📋</div>
                        </div>
                    </div>
            ) )}
                </div>
                <Pagination pagination={afonarizms?.pagination} color='light' extraClass='afonarizm-page-pagination' />
            </div>
        </main>
    )
}

export default Afonarizms;
