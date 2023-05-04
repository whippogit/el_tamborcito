import "./Buttons.css";
import { Link } from "react-router-dom";
import BannerMain from "./BannerMain";

function Buttons() {
  return (
    <div>
      <div>
        <BannerMain />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="container row ">
          <Link
            reloadDocument
            to="/nuestras-leyendas"
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
          </Link>

          <Link
            reloadDocument
            to="/nuestras-historias"
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
          </Link>
          <Link
            reloadDocument
            to="/esteros-del-iberá"
            className="col-3 boton-esteros buttonLink d-flex justify-content-center text-decoration-none m-1"
          >
            <div className="fondo-transparente margin-auto">
              <p className="fondo-transparente fs-1 text-dark fw-bold mb-0 pb-0">
                <span className="fondo-transparente colorAcent">esteros</span>
                del
                <span className="fondo-transparente colorAcent">iberá</span>
              </p>
              <div className="fondo-transparente d-flex justify-content-center">
                <h6 className="fondo-transparente text-dark m-0 p-0">
                  FLORA Y FAUNA
                </h6>
              </div>
            </div>
          </Link>
        </div>
      </div>
      
    </div>
  );
}

export default Buttons;
