import NavBar from "./component/NavBar";
import "./App.css";
import StateBar from "./component/StateBar";
import Search from "./component/Search";
import Buttons from "./component/Buttons";
import LogoTipo from "./component/LogoTipo";
import BannerMain from "./component/BannerMain";

function App() {
  return (
    <div>
      <header>
        <div className="row">
          <div className="col">
            <LogoTipo />
          </div>
          <div className="col"></div>
        </div>
        <hr />
        <NavBar />
        <hr />
      </header>
      <div>
        <BannerMain />
      </div>
      <div className="container-button mt-5">
        <Buttons />
      </div>

      <div className="bannerPublicidad">
        <img src="src/component/img/logo-corrientes1.png" alt="" />
      </div>
    </div>
  );
}

export default App;
