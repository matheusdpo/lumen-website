import { translations } from "../i18n/translations";
import comingSoonImage from "../assets/coming-soon.png";

interface HomeProps {
  lang: string;
}

export default function Home({ lang }: HomeProps) {
  const t = (key: string) => translations[lang]?.[key] || key;

  return (
    <main className="main-home">
      <img src={comingSoonImage} alt="Coming Soon" className="logoBody" />
      <h1>{t("comingSoon")}</h1>
    </main>
  );
}
