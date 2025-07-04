// Exemplo para OurServices.tsx. Crie arquivos similares para as outras páginas.

import { 
  Code, 
  Globe, 
  Smartphone, 
  Cloud, 
  Brain, 
  Users,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Clock
} from "lucide-react";
import { translations } from "../i18n/translations";

interface OurServicesProps {
  lang: string;
  darkMode: boolean;
}

export default function OurServices({ lang, darkMode }: OurServicesProps) {
  const t = (key: string) => translations[lang]?.[key] || key;
  
  // Função para obter a cor correta baseada no modo
  const getTextColor = () => darkMode ? 'white' : 'var(--primary-blue)';

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: t("customSoftwareTitle"),
      description: t("customSoftwareDesc"),
      features: ["Tailored to your needs", "Scalable architecture", "Security-first approach", "24/7 support"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t("webDevTitle"),
      description: t("webDevDesc"),
      features: ["Responsive design", "Modern frameworks", "SEO optimized", "Performance focused"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: t("mobileDevTitle"),
      description: t("mobileDevDesc"),
      features: ["Native & cross-platform", "App Store optimization", "Push notifications", "Offline capabilities"],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: t("cloudTitle"),
      description: t("cloudDesc"),
      features: ["AWS/Azure/GCP", "Migration services", "Auto-scaling", "Cost optimization"],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: t("aiTitle"),
      description: t("aiDesc"),
      features: ["Predictive analytics", "Process automation", "Natural language processing", "Computer vision"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("consultingTitle"),
      description: t("consultingPageDesc"),
      features: ["Technology assessment", "Digital strategy", "Architecture planning", "Implementation guidance"],
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Agile development methodology ensures quick delivery without compromising quality."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security measures and robust testing protocols."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Solutions",
      description: "Built to grow with your business, handling increased load and new features."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services."
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
              We specialize in creating innovative technology solutions that drive business growth, 
              improve efficiency, and provide competitive advantages in the digital marketplace.
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
                <button className="learn-more-btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{ color: getTextColor(), textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
              Why Choose Our Services?
            </h2>
            <p className="section-subtitle" style={{ color: getTextColor(), textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
              We deliver exceptional value through our proven approach and expertise
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title" style={{ color: getTextColor(), textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                  {benefit.title}
                </h3>
                <p className="benefit-description" style={{ color: getTextColor(), textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-description">
              Let's discuss how our services can help you achieve your goals and drive success.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="btn-secondary">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}