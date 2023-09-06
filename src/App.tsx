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
      <Sidebar />
      <Header />
      <Gamers />
      <Features />
      <BannerImg />
      <BannerText />
      <Cards />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
