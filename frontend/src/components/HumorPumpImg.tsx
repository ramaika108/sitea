import pump from "../images/pump/pump.png";
import pumpHandleWithEz from "../images/pump/pump-handle-with_ez.png";

const HumorPumpImg = (
  <div className="humor-pump">
    <img src={pump} alt="Колонка юмора" />
    <img
      src={pumpHandleWithEz}
      alt="Оператор колонки"
      className="humor-pump__worker"
    />
  </div>
);

export default HumorPumpImg;
