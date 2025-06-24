import { translations } from "../i18n/translations";
import comingSoonImage from "../assets/coming-soon.png";

interface HomeProps {
  lang: string;
}

export default function Home({ lang }: HomeProps) {
  const t = (key: string) => translations[lang]?.[key] || key;

  return (
    <main className="pt-24 flex flex-col items-center text-center px-4">
      <h1 className="text-3xl font-bold mb-4">{t("comingSoon")}</h1>
      <img src={comingSoonImage} alt="Coming Soon" className="max-w-md rounded shadow" />
    </main>
  );
}
