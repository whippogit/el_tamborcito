import NavBar from "./component/NavBar";
import "./App.css";
import Buttons from "./component/Buttons";
import LogoTipo from "./component/LogoTipo";
import BannerMain from "./component/BannerMain";
import Footer from "./component/Footer";
import Watch from "./component/Watch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLeyendas from "./component/PageLeyendas";
import PageHistoria from "./component/PageHistoria";
import PageIbera from "./component/PageIbera";
import PageDetail from "./component/PageDetail";
import SobreNosotros from "./component/SobreNosotros";

function App() {
  return (
    <>
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
      <div className="row">
        <hr className="col mt-2" />
        <div className="col container d-flex justify-content-center mb-2">
          <Watch />
        </div>
        <hr className="col mt-2" />
      </div>
      <section className="mt-5">
        <Router>
          <Routes>
            <Route path="/" element={<Buttons />} />
            <Route path="/nuestras-leyendas" element={<PageLeyendas />} />
            <Route path="/nuestras-historias" element={<PageHistoria />} />
            <Route path="/esteros-del-iberá" element={<PageIbera />} />
            <Route path="/esteros-del-iberá/iberá" element={<PageDetail />} />
            <Route path="/nuestras-leyendas/leyendas" element= {<PageDetail />}/>
            <Route path="/nuestras-historias/historias" element= {<PageDetail />}/>
            
          </Routes>
        </Router>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
