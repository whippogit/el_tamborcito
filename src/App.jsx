import NavBar from "./component/NavBar";
import "./App.css";
import Buttons from "./component/Buttons";
import LogoTipo from "./component/LogoTipo";
import Footer from "./component/Footer";
import Watch from "./component/Watch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLeyendas from "./component/PageLeyendas";
import PageHistoria from "./component/PageHistoria";
import PageIbera from "./component/PageIbera";
import PageDetailLeyendas from "./component/PageDetailLeyendas";
import PageDetailHistorias from "./component/PageDetailHistorias";
import Error404 from "./component/Error404";
import PageNosotros from "./component/PageNosotros";
import PageDetailIbera from "./component/PageDetailIbera";

function App() {
  return (
    <>
      <header className="fixed-top">
        <div className="row">
          <div className="col">
            <LogoTipo />
          </div>
          <div className="col"></div>
        </div>
        <hr />
        <NavBar />
        <hr />
        <div className="row">
          <hr className="col mt-2" />
          <div className="col container d-flex justify-content-center mb-2">
            <Watch />
          </div>
          <hr className="col mt-2" />
        </div>
      </header>

      <section>
        <Router>
          <Routes>
            <Route path="/" element={<Buttons />} />
            <Route path="/sobre-nosotros" element={<PageNosotros />} />
            <Route path="/nuestras-leyendas" element={<PageLeyendas />} />
            <Route path="/nuestras-historias" element={<PageHistoria />} />
            <Route path="/esteros-del-iberá" element={<PageIbera />} />
            <Route
              path="/nuestras-leyendas/:id"
              element={<PageDetailLeyendas />}
            />
            <Route
              path="/nuestras-historias/:id"
              element={<PageDetailHistorias />}
            />
            <Route path="esteros-del-iberá/:id" element={<PageDetailIbera />} />

            <Route path="*" element={<Error404 />} />
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
