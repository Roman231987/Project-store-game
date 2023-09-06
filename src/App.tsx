import BannerImg from "./components/BannerImg";
import BannerText from "./components/BannerText";
import Cards from "./components/Cards";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Gamers from "./components/Gamers";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.scss";

function App() {
  return (
    <div className="container">
      {/* <div className="sidebar"> */}
      <Sidebar />
      {/* </div> */}
      {/* <div className="header"> */}
      <Header />
      {/* </div> */}
      {/* <div className="gamers"> */}
      <Gamers />
      {/* </div> */}
      {/* <div className="feature"> */}
      <Features />
      {/* </div> */}
      {/* <div className="banner_img"> */}
      <BannerImg />
      {/* </div> */}
      {/* <div className="banner_text"> */}
      <BannerText />
      {/* </div> */}
      {/* <div className="cards"> */}
      <Cards />
      {/* </div> */}
      {/* <div className="gallery"> */}
      <Gallery />
      {/* </div> */}
      {/* <div className="footer"> */}
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default App;
