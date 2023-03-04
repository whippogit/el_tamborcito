import "./NavBar.css";

function NavBar() {
  return (
    <div className="container">
      <ul className="nav justify-content-center">
        <li className="nav-item me-5">
          <a href="/">Home</a>
        </li>
        <li className="nav-item me-5">
          <a href="/proximamente">Cultura</a>
        </li>
        <li className="nav-item me-5">
          <a href="/proximamente">Noticias</a>
        </li>
        <li className="nav-item me-5">
          <a href="/proximamente">Eventos</a>
        </li>
        <li className="nav-item me-5">
          <a href="/proximamente">Radio</a>
        </li>
        <li className="nav-item me-5">
          <a href="/sobre-nosotros">Sobre Nosotros</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
