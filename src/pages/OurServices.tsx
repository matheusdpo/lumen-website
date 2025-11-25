import { 
  Code, 
  Globe, 
  Smartphone, 
  Cloud, 
  Brain, 
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { translations } from "../i18n/translations";
import javaLogo from "../assets/Tecnologia/java.png";
import springBootLogo from "../assets/Tecnologia/speing-boot.png";
import awsLogo from "../assets/Tecnologia/aws.png";
import dockerLogo from "../assets/Tecnologia/docker.png";
import golangLogo from "../assets/Tecnologia/golang.png";
import kubernetesLogo from "../assets/Tecnologia/Kubernetes-Logo.png";
import linuxLogo from "../assets/Tecnologia/linux.png";
import mongodbLogo from "../assets/Tecnologia/mongodb.png";
import postgresqlLogo from "../assets/Tecnologia/postgresql.png";
import rabbitmqLogo from "../assets/Tecnologia/rabbitmq.png";
import reactLogo from "../assets/Tecnologia/react.png";
import flutterLogo from "../assets/Tecnologia/flutterlogo.png";

// Array to store technology logos
const technologyLogos: string[] = [
  javaLogo,
  flutterLogo,
  golangLogo,
  reactLogo,
  springBootLogo,
  awsLogo,
  dockerLogo,
  kubernetesLogo,
  linuxLogo,
  mongodbLogo,
  postgresqlLogo,
  rabbitmqLogo,
];

interface OurServicesProps {
  lang: string;
  darkMode: boolean;
}

export default function OurServices({ lang, darkMode }: OurServicesProps) {
  const t = (key: string) => translations[lang]?.[key] || key;
  
  // Função para obter a cor correta baseada no modo
  const getTextColor = () => darkMode ? '#fff5cc' : '#081144';

  // Duplicate technology logos for infinite scroll
  const duplicatedTechLogos = technologyLogos.length > 0 
    ? [...technologyLogos, ...technologyLogos] 
    : [];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: t("customSoftwareTitle"),
      description: t("customSoftwareDesc"),
      features: [
        t("customSoftwareFeature1"),
        t("customSoftwareFeature2"),
        t("customSoftwareFeature3"),
        t("customSoftwareFeature4")
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t("webDevTitle"),
      description: t("webDevDesc"),
      features: [
        t("webDevFeature1"),
        t("webDevFeature2"),
        t("webDevFeature3"),
        t("webDevFeature4")
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: t("mobileDevTitle"),
      description: t("mobileDevDesc"),
      features: [
        t("mobileDevFeature1"),
        t("mobileDevFeature2"),
        t("mobileDevFeature3"),
        t("mobileDevFeature4")
      ],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: t("cloudTitle"),
      description: t("cloudDesc"),
      features: [
        t("cloudFeature1"),
        t("cloudFeature2"),
        t("cloudFeature3"),
        t("cloudFeature4")
      ],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: t("aiTitle"),
      description: t("aiDesc"),
      features: [
        t("aiFeature1"),
        t("aiFeature2"),
        t("aiFeature3"),
        t("aiFeature4")
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("consultingTitle"),
      description: t("consultingPageDesc"),
      features: [
        t("consultingFeature1"),
        t("consultingFeature2"),
        t("consultingFeature3"),
        t("consultingFeature4")
      ],
    }
  ];


  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{t("servicesHeroTitle")}</h1>
            <p className="hero-subtitle">
              {t("servicesHeroSubtitle")}
            </p>
            <p className="hero-description">
              {t("servicesHeroDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card-modern">
                <div className="service-icon-modern">
                  {service.icon}
                </div>
                <h3 className="service-title-modern">{service.title}</h3>
                <p className="service-description-modern">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <CheckCircle className="w-4 h-4" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Carousel Section */}
      {duplicatedTechLogos.length > 0 && (
        <section className="technologies-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t("technologiesTitle")}</h2>
            </div>
            <div className="technologies-carousel-wrapper">
              <div className="technologies-carousel">
                {duplicatedTechLogos.map((logo, index) => (
                  <div key={index} className="technology-logo-item">
                    <img 
                      src={logo} 
                      alt={`Technology ${index + 1}`} 
                      className="technology-logo-img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">{t("ctaReadyTitle")}</h2>
            <p className="cta-description">
              {t("ctaReadyDescription")}
            </p>
            <div className="cta-buttons">
              <Link to="/contacts" className="btn-primary">
                {t("getStarted")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}