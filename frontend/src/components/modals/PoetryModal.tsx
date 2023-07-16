
const PoetryModal= () => {
    return(
		<div className="modal micromodal-slide" id="modal-poem" aria-hidden="true">
			<div className="modal__overlay" tabIndex={-1} data-micromodal-close>
				<div className="modal__container poem" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
					<div className="poem__prev" title="Предидущий стих"></div>
					<header className="modal__header">
						<button className="modal__close" aria-label="Close modal" data-micromodal-close></button>
						<h2 className="modal__title poem__heading">
							<select name="poem-name" id="poem-name">
								<option value="1" selected>Баллада о Еже</option>
								<option value="2">Ежи налево</option>
                            </select>
                            <br />
							<select name="poem-category" id="poem-category" className="poem__category">
								<option value="1" selected>Серезные</option>
								<option value="2">Не серезные</option>
								<option value="3">Народные</option>
                            </select>
						</h2>
						<small>Баллада не закончена, вдохновение куда то упилило. Если оно упилило к вам, допишите сами</small>
					</header>
					<div className="poem__content">
						<div className="poem__next" title="Следующий стих"></div>

						<div className="poem__item">
							<p>Прошли уж царски временна</p>
							<p>Залез ежонок в стременна</p>
							<p>Взглянул он на часы</p>
							<p>Потрогал пышные усы</p>
							<p>Вздохнул от горя и тоски</p>
							<p>Как будто бы порвал носки</p>
							<p>Он третий завтрак пропустил</p>
							<p>Домой галоппом припустил</p>
							<p>Стремительно темнело небо</p>
							<p>Жуть как хотелось черна хлеба</p>
							<p>И масло с верху положить</p>
							<p>А бурю надо пережить</p>
							<p>Упали капельки дождя</p>
							<p>На нос великого вождя</p>
							<p>Закутался тогда он в бурку</p>
							<p>Продолжил гнать свою он Дурку(так лошадку зовут)</p>
							<p>Восстала в памяти картина</p>
							<p>Как гнал он турков до Берлина</p>
						</div>

					</div>
				</div>
			</div>
		</div>
    )
}

export default PoetryModal;
