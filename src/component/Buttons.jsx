import "./Buttons.css";

function Buttons() {
  return (
    <div className="row">
      <div className="col-3">
        <a href="">
          <img
            src="src/component/img/boton-leyenda.jpg"
            alt="carpincho"
            className="buttonLink "
          />
          
        </a>
      </div>
      <div className="col-3">
        <a href="">
          <img
            src="src/component/img/boton-historia.jpg"
            alt="carpincho"
            className="buttonLink"
          />
        </a>
      </div>
      <div className="col-3">
        <a href="">
          <img
            src="src/component/img/boton-cultura.jpg"
            alt="plaza"
            className="buttonLink"
          />
        </a>
      </div>
      <div className="col-3">
        <a href="">
          <img
            src="src/component/img/boton-ibera.jpg"
            alt="corrientes"
            className="buttonLink"
          />
        </a>
      </div>
    </div>
  );
}

export default Buttons;
