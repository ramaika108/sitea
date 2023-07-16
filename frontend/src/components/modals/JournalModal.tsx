import SiteStatistics from '../SiteStatistics';

const JournalModal= () => {
    return(
		<div className="modal micromodal-slide logbook" id="modal-logbook" aria-hidden="true">
			<div className="modal__overlay" tabIndex={-1} data-micromodal-close>
				<div className="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
					<header className="modal__header">
						<button className="modal__close" aria-label="Close modal" data-micromodal-close></button>
						<h2 className="modal__title">
							Бортовой журнал
						</h2>
					</header>
					<div className="logbook__content">
						<div className="logbook__days-event">
							<h3>Событие дня</h3>
							<p>Была совершенно почти удачное военное учение с братьями нашими меньшими, мишками плюшевыми. В процессе почти никто не пострадал всем <a href="https://www.youtube.com/watch?v=ec-JuWNB37k" target="_blank">смтотреть тут</a>...</p>
						</div>
						<div className="logbook__stat">
							<h3>Статистика сайта</h3>
                            <SiteStatistics />
						</div>
					</div>
				</div>
			</div>
		</div>

    )
}

export default JournalModal;
