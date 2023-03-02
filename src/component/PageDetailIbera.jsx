import "./PageDetail.css";
import { useParams } from "react-router-dom";
import * as ApiIbera from "../services/CallIbera";
import { useEffect, useState } from "react";

function PageDetailIbera() {
  const [contentIbera, setContentIbera] = useState({});

  const params = useParams();

  useEffect(() => {
    ApiIbera.getNewsById(params.id)
      .then(setContentIbera)

      .catch(console.log);
  }, [params]);

  return (
    <div className="container">
      <div className="row m-5">
        <div className="col">
          <h1 className="colorAcent mb-3">{contentIbera.title}</h1>
          <h6>{contentIbera.description}</h6>
          <p>{contentIbera.content}</p>
        </div>
        <div className="col">
          <img
            src={contentIbera.image_url}
            alt={contentIbera.title}
            title={contentIbera.title}
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

export default PageDetailIbera;
