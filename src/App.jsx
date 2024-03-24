import { useState } from "react";
import About from "./components/About";
import Collection from "./components/Collection";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import MindMap from "./components/MindMap";
import Mint from "./components/Mint";
import MobileMenu from "./components/MobileMenu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Menu toggleMenu={toggleMenu} isOpen={isOpen} />
      <MobileMenu toggleMenu={toggleMenu} isOpen={isOpen} />
      <main>
        <Hero isOpen={isOpen} />
        <About />
        <MindMap />
        <Faq />
        <Collection />
        <Mint />
      </main>
      <Footer />
    </>
  );
}

export default App;
