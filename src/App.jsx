import NavBar from "./component/NavBar";
import "./App.css";
import StateBar from "./component/StateBar";
import Search from "./component/Search";
import Buttons from "./component/Buttons";

function App() {
  return (
    <div>
      <StateBar />
      <header>
        <div className="row">
          <div className="col">
            <h1 className="ps-5 p-2 fw-bold">el tamborcito</h1>
          </div>
          <div className="col">
            <Search />
          </div>
        </div>

        <hr />
        <NavBar />
        <hr />
      </header>
      <div className="container-button">
        <Buttons />
      </div>
      <div className="mt-5">
        <img src="src/component/img/banner1920x314.jpg" alt="" />
      </div>
      <div className="bannerPublicidad">
        <img src="src/component/img/logo-corrientes1.png" alt="" />
      </div>
    </div>
  );
}

export default App;
