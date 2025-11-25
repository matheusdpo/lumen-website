import { Link } from "react-router-dom";
import { translations } from "../i18n/translations";
import {
  Code,
  Globe,
  Smartphone,
  Settings,
  Users,
  Wrench,
  Factory,
  Scale,
  Calculator,
  Heart,
  ShoppingCart,
  GraduationCap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

interface HomeProps {
  lang: string;
  darkMode: boolean;
}

export default function Home({ lang }: HomeProps) {
  const t = (key: string) => translations[lang]?.[key] || key;

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: t("customDevelopment"),
      description: t("customDevelopmentDesc"),
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t("webApplications"),
      description: t("webApplicationsDesc"),
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: t("mobileApps"),
      description: t("mobileAppsDesc"),
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: t("systemIntegration"),
      description: t("systemIntegrationDesc"),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("consulting"),
      description: t("consultingDesc"),
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: t("maintenance"),
      description: t("maintenanceDesc"),
    },
  ];

  const industries = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: t("industry"),
      description: t("industryDesc"),
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: t("law"),
      description: t("lawDesc"),
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: t("accounting"),
      description: t("accountingDesc"),
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t("healthcare"),
      description: t("healthcareDesc"),
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: t("retail"),
      description: t("retailDesc"),
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: t("education"),
      description: t("educationDesc"),
    },
  ];

  const clients = [
    { name: "Empresa A", logo: "/src/assets/logos/logo1.png" }, // Caminho da sua imagem
    { name: "Empresa B", logo: "/src/assets/logos/logo1.png" },
    { name: "Empresa C", logo: "/src/assets/logos/logo1.png" },
    { name: "Empresa D", logo: "/src/assets/logos/logo1.png" },
    { name: "Empresa E", logo: "/src/assets/logos/logo1.png" },
  ];

  // const stats = [
  //   { number: "1+", label: t("aboutStats") },
  //   { number: "5+", label: t("aboutProjects") },
  //   { number: "10+", label: t("aboutClients") },
  //   { number: "15+", label: t("aboutTeam") },
  // ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{t("heroTitle")}</h1>
          <p className="hero-subtitle">{t("heroSubtitle")}</p>
          <div className="hero-buttons">
            <Link to="/our-services" className="btn-primary">
              {t("heroCTA")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/contacts" className="btn-secondary">
              {t("heroCTASecondary")}
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-graphic">
            <div className="floating-card card-1">
              <Code className="w-6 h-6" />
              <span>Websites</span>
            </div>
            <div className="floating-card card-2">
              <Smartphone className="w-6 h-6" />
              <span>Mobile Apps</span>
            </div>
            <div className="floating-card card-3">
              <Settings className="w-6 h-6" />
              <span>Integration</span>
            </div>
            <div className="floating-card card-4">
              <Settings className="w-6 h-6" />
              <span>WebService</span>
            </div>
            <div className="floating-card card-5">
              <Settings className="w-6 h-6" />
              <span>IA</span>
            </div>
            <div className="floating-card card-6">
              <Settings className="w-6 h-6" />
              <span>SaaS</span>
            </div>
            <div className="floating-card card-7">
              <Settings className="w-6 h-6" />
              <span>API</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t("servicesTitle")}</h2>
            <p className="section-subtitle">{t("servicesSubtitle")}</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="about-title">{t("aboutTitle")}</h2>
              <h3 className="about-subtitle">{t("aboutSubtitle")}</h3>
              <p className="about-description">{t("aboutText")}</p>
              <div className="about-features">
                <div className="feature">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span>{t("qualityOne")}</span>
                </div>
                <div className="feature">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span>{t("qualityTwo")}</span>
                </div>
                <div className="feature">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span>{t("qualityThree")}</span>
                </div>
              </div>
            </div>

            <div className="about-image">
              <img
                src="/src/assets/images/lumen-yellow.png"
                alt="About Us"
                className="footer-home"
              />
            </div>

            {/* <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
