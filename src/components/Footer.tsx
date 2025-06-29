import { translations } from "../i18n/translations";
import logoBlue from "../assets/images/arc-blue.png";
import logoYellow from "../assets/images/arc-yellow.png";
import {
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

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
            src={darkMode ? logoBlue : logoYellow}
            alt="Logo"
            className="footer-logo"
          />
          <p className="mt-2">Incline Village, Nevada 89450, USA</p>
          <p className="mt-2">São Paulo, SP 01310-930, BR</p>
        </div>

        <div className="footer-center">
          <h4 style={{ fontWeight: 700, marginBottom: "8px" }}>{t("contact")}</h4>
          <p>+1 (775) 555-1234</p>
          <p>email@mail.com</p>
        </div>

        <div className="footer-right">
          <h4 style={{ fontWeight: 700, marginBottom: "8px" }}>{t("followUs")}</h4>
          <div className="flex justify-center md:justify-start gap-3 flex-wrap">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Lumen. {t("rights")}</p>
      </div>
    </footer>
  );
}
