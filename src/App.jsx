import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import CV from "./pages/CV_page";
import Mail from "./pages/Mail_page";
import Newsletter from "./pages/Newsletter_page";
import Footer from "./components/Footer";
import Home from "./pages/Home_page";
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cv" element={<CV />}></Route>
        <Route path="/mail" element={<Mail />}></Route>
        <Route path="/newsletter" element={<Newsletter />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
