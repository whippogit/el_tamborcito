import NavBar from "./component/NavBar";
import "./App.css";
import Buttons from "./component/Buttons";
import LogoTipo from "./component/LogoTipo";
import BannerMain from "./component/BannerMain";
import Footer from "./component/Footer";

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

      <div className="container mt-5">
        <Buttons />
      </div>

      <div className="bannerPublicidad"></div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
