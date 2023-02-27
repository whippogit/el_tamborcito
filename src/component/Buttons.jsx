import "./Buttons.css";

function Buttons() {
  return (
    <div className="container row">
      <a
        href="#"
        className="col-3 boton-leyenda buttonLink d-flex justify-content-center text-decoration-none m-1"
      >
        <div className="fondo-transparente margin-auto">
          <p className="fondo-transparente fs-1 text-dark fw-bold mb-0 pb-0">
            <span className="fondo-transparente colorAcent">nuestras</span>
            leyendas
          </p>
          <div className="fondo-transparente d-flex justify-content-center">
            <h6 className="fondo-transparente text-dark m-0 p-0">
              MITOS Y LEYENDAS
            </h6>
          </div>
        </div>
      </a>
      
      <a
        href="#"
        className="col-3 boton-historia buttonLink d-flex justify-content-center text-decoration-none m-1"
      >
        <div className="fondo-transparente margin-auto">
          <p className="fondo-transparente fs-1 text-dark fw-bold mb-0 pb-0">
            <span className="fondo-transparente colorAcent">nuestra</span>
            historia
          </p>
          <div className="fondo-transparente d-flex justify-content-center">
            <h6 className="fondo-transparente text-dark m-0 p-0">
              HISTORIAS E IDENTIDAD
            </h6>
          </div>
        </div>
      </a>
      <a
        href="#"
        className="col-3 boton-esteros buttonLink d-flex justify-content-center text-decoration-none m-1"
      >
        <div className="fondo-transparente margin-auto">
          <p className="fondo-transparente fs-1 text-dark fw-bold mb-0 pb-0">
            <span className="fondo-transparente colorAcent">esteros</span>del
            <span className="fondo-transparente colorAcent">iberá</span>
          </p>
          <div className="fondo-transparente d-flex justify-content-center">
            <h6 className="fondo-transparente text-dark m-0 p-0">
              FLORA Y FAUNA
            </h6>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Buttons;
