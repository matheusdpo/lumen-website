import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom"; // Importar NavLink e Link
import { Sun, Moon } from "lucide-react";
import { LANGUAGES, translations } from "../i18n/translations";
import logoBlue from "../assets/images/icon-blue.png";
import logoYellow from "../assets/images/icon-yellow.png";

interface HeaderProps {
  lang: string;
  setLang: (lang: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Header({
  lang,
  setLang,
  darkMode,
  setDarkMode,
}: HeaderProps) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const t = (key: string) => translations[lang]?.[key] || key;

  // Lista de links de navegação
  const navLinks = [
    { to: "/", key: "home" },
    { to: "/our-services", key: "ourServices" },
    { to: "/about-us", key: "aboutUs" },
    { to: "/contacts", key: "contacts" },
  ];

  return (
    <header
      className={`header ${darkMode ? "dark" : ""} ${
        showHeader ? "visible" : "hidden"
      }`}
    >
      <div className="header-content">
        <Link to="/">
          <img
            src={darkMode ? logoYellow : logoBlue}
            alt="Logo"
            className="logo"
          />
        </Link>
        <nav className="nav">
          {navLinks.map((link) => (
            <NavLink key={link.key} to={link.to} className="nav-link">
              {t(link.key)}
            </NavLink>
          ))}
        </nav>
        <div className="header-controls">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="lang-select"
            aria-label="Selecione o idioma"
          >
            {LANGUAGES.map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
            className="dark-toggle-btn"
            type="button"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}