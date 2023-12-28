import { useState, useEffect } from "react";
import * as Api from "../services/CallHistorias";
import { Link } from "react-router-dom";

function PageNoticias() {
  const [all, setAll] = useState([]);

  useEffect(() => {
    Api.getAllDatosHistorias().then(setAll);
  }, []);

  console.log(all);
  return (
    <div className="container">
      <h1 className="colorAcent fw-bold fs-5 mb-5">Útimas noticias</h1>
      <div>
        <div className="row m-5">
          {all.map((datoIbera) => (
            <Link
              to={`/nuestras-leyendas/${datoIbera._id}`}
              key={datoIbera._id}
              className="card-noticias col-4"
            >
              <div>
                <h6 className="fw-bold ">{datoIbera.titleHistory}</h6>
                <div>
                  <img
                    src={datoIbera.image_url}
                    alt={datoIbera.titleEsteros}
                    className="img-noticias"
                  />
                </div>
              </div>
              <p>{datoIbera.descriptionHistory}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageNoticias;
