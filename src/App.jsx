import About from "./components/About";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import MindMap from "./components/MindMap";

function App() {
  return (
    <>
      <main>
        <Menu />
        <Hero />
        <About />
        <MindMap />
        <Faq />
      </main>
    </>
  );
}

export default App;
