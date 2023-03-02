import { Link } from "react-router-dom";
import * as Api from "../services/CallIbera";
import { useEffect, useState } from "react";

function PageIbera() {
  const [all, setAll] = useState([]);

  useEffect(() => {
    Api.getAllIbera().then(setAll);
  }, []);
  return (
    <div className="container">
      <div>
        <div className="d-flex justify-content-center">
          <h1 className="colorAcent fw-bold fs-1 mb-5">Esteros del Iberá</h1>
        </div>

        <div>
          <div className="container row m-5">
            {all.map((dato) => (
              <Link
                to="/esteros-del-iberá/iberá"
                className="col-3 boton-comodin buttonLink d-flex justify-content-center text-decoration-none m-1"
              >
                <div className="fondo-transparente margin-auto">
                  <p className="fondo-transparente fs-5 text-dark fw-bold mb-0 pb-0">
                    {dato.category}
                  </p>
                  <div className="fondo-transparente d-flex justify-content-center">
                    <h6 className="fondo-transparente text-dark m-0 p-0">
                      MITOS Y LEYENDAS
                    </h6>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageIbera;
