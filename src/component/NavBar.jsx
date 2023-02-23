import "./NavBar.css";

function NavBar() {
  return (
    <div className="container bg-color">
      <ul className="nav justify-content-center">
        <li className="nav-item me-5">
          <a>Home</a>
        </li>
        <li className="nav-item me-5">
          <a>Cultura</a>
        </li>
        <li className="nav-item me-5">
          <a>Capital</a>
        </li>
        <li className="nav-item me-5">
          <a>Interior</a>
        </li>
        <li className="nav-item me-5">
          <a>Eventos</a>
        </li>
        <li className="nav-item me-5">
          <a>Radio</a>
        </li>
        <li className="nav-item me-5">
          <a>Sobre Nosotros</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
