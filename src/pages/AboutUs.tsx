import { 
  Users, 
  Target, 
  Award, 
  Globe,
  Heart,
  Shield,
  Zap,
  Star,
  UserCheck
} from "lucide-react";
import { translations } from "../i18n/translations";
import logo1 from "../assets/logos/logo1.png";

interface AboutUsProps {
  lang: string;
  darkMode: boolean;
}

export default function AboutUs({ lang, darkMode }: AboutUsProps) {
  const t = (key: string) => translations[lang]?.[key] || key;

  // Array de logos dos clientes ativos
  // Adicione mais logos aqui quando disponíveis
  const clientLogos = [logo1];
  
  // Duplicar os logos para criar um loop infinito
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  const stats = [
    { number: "5+", label: t("statsYears"), icon: <Award className="w-6 h-6" /> },
    { number: "10+", label: t("statsProjects"), icon: <Target className="w-6 h-6" /> },
    { number: "100%", label: t("statsClients"), icon: <Heart className="w-6 h-6" /> },
    { number: "100%", label: t("statsTeam"), icon: <Users className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: t("innovation"),
      description: t("innovationDesc"),
      color: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t("quality"),
      description: t("qualityDesc"),
      color: "bg-gradient-to-br from-blue-500 to-indigo-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t("integrity"),
      description: t("integrityDesc"),
      color: "bg-gradient-to-br from-pink-500 to-red-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("collaboration"),
      description: t("collaborationDesc"),
      color: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: t("excellence"),
      description: t("excellenceDesc"),
      color: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: t("customerFocus"),
      description: t("customerFocusDesc"),
      color: "bg-gradient-to-br from-cyan-500 to-blue-600"
    }
  ];


  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{t("aboutHeroTitle")}</h1>
            <p className="hero-subtitle">
              {t("aboutHeroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="story-title">{t("ourStoryTitle")}</h2>
              <p className="story-description">
                {t("ourStoryDesc1")}
              </p>
              <p className="story-description">
                {t("ourStoryDesc2")}
              </p>
            </div>
            <div className="story-visual">
              <div className="story-image-placeholder">
                <Globe className="w-16 h-16 text-primary-yellow" />
                <p>Our Journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <h3 className="mission-title">{t("ourMissionTitle")}</h3>
              <p className="mission-description">
                {t("ourMissionDesc")}
              </p>
            </div>
            <div className="vision-card">
              <h3 className="vision-title">{t("ourVisionTitle")}</h3>
              <p className="vision-description">
                {t("ourVisionDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t("ourValuesTitle")}</h2>
            <p className="section-subtitle">
              {t("ourValuesSubtitle")}
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className={`value-icon ${value.color}`}>
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">{t("activePartners")}</h2>
            <div className="clients-carousel-wrapper">
              <div className="clients-carousel">
                {duplicatedLogos.map((logo, index) => (
                  <div key={index} className="client-logo-item">
                    <img 
                      src={logo} 
                      alt={`Client Logo ${index + 1}`} 
                      className="client-logo-img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
