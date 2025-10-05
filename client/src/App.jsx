import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";

import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Storia from "./pages/Storia";
import Team from "./pages/Team";
import Preparazioni from "./pages/Preparazioni";
import Motorsport from "./pages/Motorsport";
import NewsMotori from "./pages/NewsMotori";
import NewsArticle from "./pages/NewsArticle";
import Contatti from "./pages/Contatti";
import useAutoScroll from "./hooks/useAutoScroll";
import "./styles/main.css";

function App() {
  useAutoScroll();

  return (
    <div className="App">
      <CustomNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/storia" element={<Storia />} />
          <Route path="/team" element={<Team />} />
          <Route path="/preparazioni" element={<Preparazioni />} />
          {/* <Route path="/noleggio" element={<Noleggio />} /> */}
          {/* <Route path="/hurr" element={<HurrPrototipo />} /> */}
          <Route path="/motorsport" element={<Motorsport />} />
          <Route path="/news" element={<NewsMotori />} />
          <Route path="/news/:id" element={<NewsArticle />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
