import "./Footer.css";

function Footer() {
  return (
    <div className="fondo-gradiente">
      <div className="container fondo-transparente d-flex justify-content-center">
        <img
          src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1676646393/logo_tamborcito_negro_arthlx.png"
          alt="el tamborcito"
          className="config-logo mt-5"
        />
      </div>
      <div className="fondo-transparente d-flex justify-content-center">
        <h6 className="config-redes">
          <b className="fondo-transparente">Seguinos en nuestras redes</b>
        </h6>
      </div>
    </div>
  );
}

export default Footer;
