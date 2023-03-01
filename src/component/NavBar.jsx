import "./NavBar.css";
import Search from "./Search";
import { Link } from "react-router-dom";

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
          <a href="#">Capital</a>
        </li>
        <li className="nav-item me-5">
          <a href="#">Interior</a>
        </li>
        <li className="nav-item me-5">
          <a href="#">Eventos</a>
        </li>
        <li className="nav-item me-5">
          <a href="#">Radio</a>
        </li>
        <li className="nav-item me-5">
          <a href="#">Sobre Nosotros</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
