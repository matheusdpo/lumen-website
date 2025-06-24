import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { translations } from "./i18n/translations";
import lumenBlue from "./assets/lumen-blue.png";
import lumenYellow from "./assets/lumen-yellow.png";

export default function App() {
  const [lang, setLang] = useState("pt");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const t = (key: string) => translations[lang]?.[key] || key;

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
            element={
              <div className="home">
                <h1>{t("comingSoon")}</h1>
                <img
                  className="logoBody"
                  src={darkMode ? lumenYellow : lumenBlue}
                ></img>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer darkMode={darkMode} lang={lang} />
    </Router>
  );
}
