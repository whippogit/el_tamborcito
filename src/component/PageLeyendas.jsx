import { Link } from "react-router-dom";
import * as Api from "../services/CallLeyendas";
import { useEffect, useState } from "react";

function PageLeyendas() {
  const [all, setAll] = useState([]);

  useEffect(() => {
    Api.getAllLeyendas().then(setAll);
  }, []);
  return (
    <div className="container">
      <div>
        <div className="d-flex justify-content-center">
          <h1 className="colorAcent fw-bold fs-1 mb-5">Nuestras Leyendas</h1>
        </div>

        <div>
          <div className="container row m-5">
            {all.map((datoLeyenda) => (
              <Link
                to={`/nuestras-leyendas/${datoLeyenda._id}`}
                key={datoLeyenda._id}
                className="col-3 boton-comodin buttonLink d-flex justify-content-center text-decoration-none m-1"
              >
                <div className="fondo-transparente margin-auto">
                  <p className="fondo-transparente fs-5 text-dark fw-bold mb-0 pb-0">
                    {datoLeyenda.title}
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

export default PageLeyendas;
