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
import { useMediaQuery } from "react-responsive";
import TabletMenu from "./components/TabletMenu";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Menu toggleMenu={toggleMenu} isOpen={isOpen} isTablet={isTablet} />
      {!isTablet ? (
        <MobileMenu toggleMenu={toggleMenu} isOpen={isOpen} />
      ) : (
        <TabletMenu toggleMenu={toggleMenu} isOpen={isOpen} />
      )}
      <main>
        <Hero isOpen={isOpen} isTablet={isTablet} />
        <About isTablet={isTablet} />
        <MindMap isTablet={isTablet} />
        <Faq isTablet={isTablet} />
        <Collection isTablet={isTablet} />
        <Mint />
      </main>
      <Footer />
    </>
  );
}

export default App;
