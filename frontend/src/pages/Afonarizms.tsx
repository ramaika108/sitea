import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import Fetch from "../components/Fetch";
import Pagination from '../components/Pagination';

import afonar from '../images/afonar.png';

const Afonarizms = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    interface Afonarizm{
        id: string;
        body: string;
    }

    interface Data {
        afonarizms:Afonarizm[];
        pagination:any
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
        <div className='afonarizm-page'>
	<div className="afonarizm-page__heading">Ежинные афонаризмы</div>
	<p className="afonarizm-page__desc">(Это всякие бумажки приклеенные под фонариками)</p>

    <Pagination pagination={afonarizms?.pagination} color='light' extraClass='afonarizm-page-pagination' />
	<div className="afonarizm-page__content">
		<div className="content-wrapper">
			<div className="big-circ">
				<div className="small-circ"></div>
			</div>
			<div className="top-part"></div>
			<div className="main-line">

                {afonarizms && afonarizms.afonarizms.map( (afonarizm:Afonarizm) => (
                    <div className="main-line__item" key={afonarizm.id}>
                        <p>{afonarizm.body}</p>
                    </div>
                ) )}

			</div>
		</div>
        <img src={afonar} alt="Фонарик" className="content-decoration" />
	</div>

    <Pagination pagination={afonarizms?.pagination} color='light' extraClass='afonarizm-page-pagination' />
</div>
    )
}

export default Afonarizms;
