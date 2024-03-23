import About from "./components/About";
import Collection from "./components/Collection";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import MindMap from "./components/MindMap";
import Mint from "./components/Mint";

function App() {
  return (
    <>
      <Menu />
      <main>
        <Hero />
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
