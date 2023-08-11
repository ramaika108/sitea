const Disclaimer = (props: { setter: Function }) => {
  let showDisclaimer: Function = props.setter;
  const closeDisclaiemer = () => {
    showDisclaimer(false);
  };
  return (
    <div className="disclamier">
      <div className="disclaimer__text">
        Внимание! Данный сайт предназначен исключительно для ежей! Повторяю
        людям здесь делать нечего, тем более умным человекам. Всегда рады
        обидчивым ежам, свободна одна вакансия водовоза.
      </div>
      <div className="disclaimer__close-btn" onClick={closeDisclaiemer}>
        Х
      </div>
    </div>
  );
};

export default Disclaimer;
