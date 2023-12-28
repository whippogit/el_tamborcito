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
import Proximamente from "./component/Proximamente";
import Drop from "./component/Drop";
import PageNoticias from "./component/PageNoticias";

function App() {
  return (
    <>
      <header className="fixed-top">
        <div className="row">
          <div className="col">
            <LogoTipo />
          </div>
          <div className="col">
            <div className="mt-4">
              <Drop />
            </div>
          </div>
        </div>
        <hr />

        <NavBar />

        <hr className="d-none d-sm-block" />
        <div className="row">
          <hr className="col mt-2 d-none d-sm-block" />
          <div className="col container d-flex justify-content-center mb-2">
            <Watch />
          </div>
          <hr className="col mt-2 d-none d-sm-block" />
        </div>
      </header>

      <section>
        <Router>
          <Routes>
            <Route path="/" element={<Buttons />} />
            <Route path="/sobre-nosotros" element={<PageNosotros />} />
            <Route path="/nuestras-leyendas" element={<PageLeyendas />} />
            <Route path="/nuestras-historias" element={<Proximamente />} />
            <Route path="/esteros-del-iberá" element={<Proximamente />} />
            <Route
              path="/nuestras-leyendas/:id"
              element={<PageDetailLeyendas />}
            />
            <Route
              path="/nuestras-historias/:id"
              element={<PageDetailHistorias />}
            />
            <Route
              path="/esteros-del-iberá/:id"
              element={<PageDetailIbera />}
            />
            <Route path="/proximamente" element={<Proximamente />} />
            <Route path="/noticias" element={<PageNoticias />} />

            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </section>
      <div className="d-flex justify-content-center m-5">
        <img
          src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1677775249/logo-corrientes_rzqz0i.png"
          alt="Corrientes somos todos"
          title="Corrientes somos todos"
          className="banner-ctes"
        />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
