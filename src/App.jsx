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
            <h1 className="ps-5 p-2 fw-bold"><b>el</b>tamborcito<b>.com</b></h1>
          </div>
          <div className="col">
            
          </div>
        </div>

        <hr />
        <NavBar />
        <hr />
      </header>
      <div >
        <img src="src/component/img/banner1920x314.jpg" alt="" />
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
