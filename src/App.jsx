import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Stack from "./components/stack/Stack";
import "./app.scss";
import { useState } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  AOS.init({startEvent: 'load'});
  window.addEventListener('load', AOS.refresh);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Stack />
        <Contact />
      </div>
    </div>
  );
}

export default App;
