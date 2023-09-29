import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import CV_page from "./pages/CV_page";
import Mail from "./pages/Mail_page";
import Newsletter_page from "./pages/Newsletter_page";
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/cv" element={<CV_page />}></Route>
        <Route path="/mail" element={<Mail />}></Route>
        <Route path="/newsletter" element={<Newsletter_page />}></Route>
      </Routes>
    </div>
  );
}

export default App;
