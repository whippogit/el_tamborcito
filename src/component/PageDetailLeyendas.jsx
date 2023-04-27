import "./PageDetail.css";
import { useParams } from "react-router-dom";
import * as ApiLeyendas from "../services/CallLeyendas";
import { useEffect, useState } from "react";

function PageDetailLeyendas() {
  const [contentLeyenda, setContentLeyenda] = useState({});

  const params = useParams();

  useEffect(() => {
    ApiLeyendas.getNewsById(params.id)
      .then(setContentLeyenda)

      .catch(console.log);
  }, [params]);

  return (
    <div className="container">
      <div className="row m-5">
        <div className="col">
          <h1 className="colorAcent mb-3">{contentLeyenda.titleLegends}</h1>
          <p className="config-text">{contentLeyenda.descriptionLegends}</p>
          <p className="config-text">{contentLeyenda.contentLegends}</p>
        </div>
        <div className="col">
          <img
            src={contentLeyenda.image_url}
            alt={contentLeyenda.titleLegends}
            title={contentLeyenda.titleLegends}
            className="img-size mt-5"
          />
        </div>
      </div>
      <div>
        <a href="">
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1677773926/pdf_descarga_fmeiqi.png"
            alt=""
            className="descarga mb-5"
          />
        </a>
      </div>
    </div>
  );
}

export default PageDetailLeyendas;
