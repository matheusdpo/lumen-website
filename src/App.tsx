import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import AboutUs from "./pages/AboutUs";
import JoinUs from "./pages/JoinUs";
import Contacts from "./pages/Contacts";

export default function App() {
  const [lang, setLang] = useState("pt");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = "https://use.typekit.net/mwr7uaa.css";
    document.head.appendChild(fontLink);
  }, [darkMode]);

  return (
    <Router>
      <Header
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home lang={lang} darkMode={darkMode} />}
          />
          <Route
            path="/our-services"
            element={<OurServices lang={lang} darkMode={darkMode} />}
          />
          <Route
            path="/about-us"
            element={<AboutUs lang={lang} darkMode={darkMode} />}
          />
          <Route
            path="/join-us"
            element={<JoinUs lang={lang} darkMode={darkMode} />}
          />
          <Route
            path="/contacts"
            element={<Contacts lang={lang} darkMode={darkMode} />}
          />
        </Routes>
      </main>
      <Footer darkMode={darkMode} lang={lang} />
    </Router>
  );
}
