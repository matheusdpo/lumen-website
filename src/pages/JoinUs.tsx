import React from 'react';
import { translations } from '../i18n/translations';
import { 
  Users, 
  Award, 
  TrendingUp, 
  Heart,
  Clock,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Laptop2,
  UserCheck,
  FileText,
  Send
} from "lucide-react";

interface JoinUsProps {
  lang: string;
  darkMode: boolean;
}

export default function JoinUs({ lang, darkMode }: JoinUsProps) {
  const t = (key: string) => translations[lang]?.[key] || key;

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('careerGrowth'),
      description: t('careerGrowthDesc'),
      color: "bg-gradient-to-br from-blue-500 to-indigo-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t('workLifeBalance'),
      description: t('workLifeBalanceDesc'),
      color: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t('competitiveBenefits'),
      description: t('competitiveBenefitsDesc'),
      color: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('innovativeProjects'),
      description: t('innovativeProjectsDesc'),
      color: "bg-gradient-to-br from-purple-500 to-pink-600"
    }
  ];

  const positions = [
    {
      icon: <Laptop2 className="w-6 h-6" />,
      title: t('softwareDeveloper'),
      description: t('softwareDeveloperDesc'),
      location: "Remote / Hybrid",
      type: "Full-time"
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: t('projectManager'),
      description: t('projectManagerDesc'),
      location: "Remote / Hybrid",
      type: "Full-time"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: t('uiUxDesigner'),
      description: t('uiUxDesignerDesc'),
      location: "Remote / Hybrid",
      type: "Full-time"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: t('salesRepresentative'),
      description: t('salesRepresentativeDesc'),
      location: "Remote / Hybrid",
      type: "Full-time"
    }
  ];

  const process = [
    {
      step: 1,
      icon: <FileText className="w-6 h-6" />,
      title: "Apply Online",
      description: "Submit your application and resume through our online form."
    },
    {
      step: 2,
      icon: <UserCheck className="w-6 h-6" />,
      title: "Interview",
      description: "Participate in a virtual interview with our team."
    },
    {
      step: 3,
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Assessment",
      description: "Show your skills in a technical or practical assessment."
    },
    {
      step: 4,
      icon: <Send className="w-6 h-6" />,
      title: "Offer & Onboarding",
      description: "Receive your offer and start your journey at Lumen!"
    }
  ];

  return (
    <div className="joinus-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{t('joinHeroTitle')}</h1>
            <p className="hero-subtitle">{t('joinHeroSubtitle')}</p>
            <p className="hero-description">{t('whyJoinDesc')}</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('whyJoinTitle')}</h2>
            <p className="section-subtitle">{t('whyJoinDesc')}</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card-modern">
                <div className={`benefit-icon-modern ${benefit.color}`}>
                  {benefit.icon}
                </div>
                <h3 className="benefit-title-modern">{benefit.title}</h3>
                <p className="benefit-description-modern">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="positions-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('openPositionsTitle')}</h2>
            <p className="section-subtitle">Join our team and help us build the future of technology</p>
          </div>
          <div className="positions-grid">
            {positions.map((position, index) => (
              <div key={index} className="position-card">
                <div className="position-icon">{position.icon}</div>
                <h3 className="position-title">{position.title}</h3>
                <p className="position-description">{position.description}</p>
                <div className="position-meta">
                  <span className="position-location">{position.location}</span>
                  <span className="position-type">{position.type}</span>
                </div>
                <button className="apply-btn">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How to Apply</h2>
            <p className="section-subtitle">Our simple and transparent hiring process</p>
          </div>
          <div className="process-steps">
            {process.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-number">{step.step}</div>
                <div className="process-step-icon">{step.icon}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Join Us?</h2>
            <p className="cta-description">
              Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">
                Send Resume
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="btn-secondary">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
