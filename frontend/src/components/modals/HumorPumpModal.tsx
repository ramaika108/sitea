import {useEffect, useState} from "react";
import Fetch from "../Fetch";

const HumorPumpModal = () => {
    type Water = {
        id:number
        body:string
    }

    const [water, setWater] = useState<Water[]>([])

    useEffect(() => {
        Fetch("/api/v1/humor-pump", setWater)
    }, [])

    return(

		<div className="modal micromodal-slide modal-humor-pump" id="modal-humor-pump" aria-hidden="true">
			<div className="modal__overlay" tabIndex={-1} data-micromodal-close>
				<div className="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
					<header className="modal__header">
						<button className="modal__close" aria-label="Close modal" data-micromodal-close></button>
						<h2 className="modal__title">
							Колонка юмора
						</h2>
					</header>
					<div className="humor-pump__content">
						<div className="humor-pump__decoration"></div>
                        {water.length && water.map(vedro => <p key={vedro.id}>{vedro.body}</p>)}
					</div>
					</div>
				</div>
			</div>
    )
}


export default HumorPumpModal;
