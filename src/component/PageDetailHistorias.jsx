import "./PageDetail.css";
import { useParams } from "react-router-dom";
import * as ApiHistorias from "../services/CallHistorias";
import { useEffect, useState } from "react";

function PageDetailHistorias() {
  const [contentHistoria, setContentHistoria] = useState({});

  const params = useParams();

  useEffect(() => {
    ApiHistorias.getNewsById(params.id)
      .then(setContentHistoria)

      .catch(console.log);
  }, [params]);

  return (
    <div className="container">
      <div className="row m-5">
        <div className="col">
          <h1 className="colorAcent mb-3">{contentHistoria.title}</h1>
          <h6>{contentHistoria.description}</h6>
          <p>{contentHistoria.content}</p>
        </div>
        <div className="col">
          <img
            src={contentHistoria.image_url}
            alt={contentHistoria.title}
            title={contentHistoria.title}
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

export default PageDetailHistorias;
