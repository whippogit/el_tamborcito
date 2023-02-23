import "./Buttons.css";

function Buttons() {
  return (
    <div className="row">
      <div className="col-3">
        <a href="">
          <img
            src="src/component/img/chamameBaile.jpg"
            alt="carpincho"
            className="buttonLink "
          />
          
        </a>
      </div>
      <div className="col-3">
        <a href="">
          <img
            src="src/component/img/lapacho.jpg"
            alt="carpincho"
            className="buttonLink"
          />
        </a>
      </div>
      <div className="col-3">
        <a href="">
          <img
            src="src/component/img/carpincho.jpg"
            alt="plaza"
            className="buttonLink"
          />
        </a>
      </div>
      <div className="col-3">
        <a href="">
          <img
            src="src/component/img/corrientesBarco.jpg"
            alt="corrientes"
            className="buttonLink"
          />
        </a>
      </div>
    </div>
  );
}

export default Buttons;
