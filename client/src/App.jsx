import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";

import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Storia from "./pages/Storia";
import Team from "./pages/Team";
import Preparazioni from "./pages/Preparazioni";
import Noleggio from "./pages/Noleggio";
import HurrPrototipo from "./pages/HurrPrototipo";
import NewsMotori from "./pages/NewsMotori";
import Contatti from "./pages/Contatti";
import useAutoScroll from "./hooks/useAutoScroll";
import "./styles/main.css";

function App() {
  useAutoScroll(); // Hook per lo scroll automatico

  return (
    <div className="App">
      <CustomNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/storia" element={<Storia />} />
          <Route path="/team" element={<Team />} />
          <Route path="/preparazioni" element={<Preparazioni />} />
          <Route path="/noleggio" element={<Noleggio />} />
          <Route path="/hurr" element={<HurrPrototipo />} />
          <Route path="/news" element={<NewsMotori />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
