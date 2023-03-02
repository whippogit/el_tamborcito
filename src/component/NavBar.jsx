import "./NavBar.css";

function NavBar() {
  return (
    <div className="container">
      <ul className="nav justify-content-center">
        <li className="nav-item me-5">
          <a href="/">Home</a>
        </li>
        <li className="nav-item me-5">
          <a href="#">Cultura</a>
        </li>
        <li className="nav-item me-5">
          <a href="#">Noticias</a>
        </li>
        <li className="nav-item me-5">
          <a href="#">Eventos</a>
        </li>
        <li className="nav-item me-5">
          <a href="#">Radio</a>
        </li>
        <li className="nav-item me-5">
          <a href="/sobre-nosotros">Sobre Nosotros</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
