import "./Footer.css";

function Footer() {
  return (
    <div className="fondo-gradiente">
      <div className="container fondo-transparente d-flex justify-content-center">
        <a href="/">
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1676646393/logo_tamborcito_negro_arthlx.png"
            alt="el tamborcito"
            className="config-logo mt-5"
          />
        </a>
      </div>
      <div className="fondo-transparente d-flex justify-content-center">
        <h6 className="config-redes">
          <b className="fondo-transparente text-white">Seguinos en nuestras redes</b>
          <ul className="nav justify-content-center">
            <li className="nav-item m-3">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1677797083/facebook-icon-negro_lulscx.png"
                  alt=""
                  className="size-redes-img"
                />
              </a>
            </li>
            <li className="nav-item m-3">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1677797083/instagram-icon-negro_atcu2c.png"
                  alt=""
                  className="size-redes-img"
                />
              </a>
            </li>
            <li className="nav-item m-3">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1677797083/youtube-icon-negro_jx9yzc.png"
                  alt=""
                  className="size-redes-img"
                />
              </a>
            </li>
          </ul>
        </h6>
      </div>
      <hr />
      <div className="bg-dark">
        <div className="container d-flex justify-content-center">
          <div className="fs-6 text-white">Copyright-eltamborcito-2023</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
