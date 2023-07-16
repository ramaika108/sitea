import work from '../../images/work.jpg';

const TSocietyModal= () => {
    return(
		<div className="modal micromodal-slide" id="modal-society" aria-hidden="true">
			<div className="modal__overlay" tabIndex={-1} data-micromodal-close>
				<div className="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
					<header className="modal__header">
						<button className="modal__close" aria-label="Close modal" data-micromodal-close></button>
						<h2 className="modal__title">
							Тайное общество
						</h2>
					</header>
					<div className="t-society__content">
						<p>Чтобы вступить в наше тайное общество, нужно пройти испытания. Но на данный момент наше тайное общество на столько тайное, что набор в него пока закрыт(Проходит побелка помещений, окучивание новичков и прочие сель хоз работы).</p>
                        <img src={work} alt="Работаем не покладая лап" />
				</div>
			</div>
		</div>
    </div>
    )
}

export default TSocietyModal;
