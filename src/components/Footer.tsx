import { translations } from "../i18n/translations";
import logoBlue from "../assets/arc-blue.png";
import logoYellow from "../assets/arc-yellow.png";

interface FooterProps {
  darkMode: boolean;
  lang: string;
}

export default function Footer({ darkMode, lang }: FooterProps) {
  const t = (key: string) => translations[lang]?.[key] || key;

  return (
    <footer className={darkMode ? "dark" : ""}>
      <div className="footer-content">
        <div className="footer-left">
          <img
            src={darkMode ? logoYellow : logoBlue}
            alt="Logo"
            className="footer-logo"
          />
        </div>
        <div className="footer-center">
          <p>Taubaté, São Paulo, Brasil</p>
          <p>Telefone: +55 12 98141-3700</p>
        </div>
        <div className="footer-right">
          <a
            href="https://instagram.com/seuperfil"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href="https://youtube.com/seucanal"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            YouTube
          </a>
          <a
            href="https://linkedin.com/in/seuperfil"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/seuperfil"
            target="_blank"
            rel="noreferrer"
            aria-label="X (Twitter)"
          >
            X
          </a>
          <a
            href="https://github.com/seuperfil"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Lumen. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
