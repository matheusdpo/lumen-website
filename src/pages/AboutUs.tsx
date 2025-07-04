
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  Heart,
  Shield,
  Zap,
  ArrowRight
} from "lucide-react";

interface AboutUsProps {
  lang: string;
  darkMode: boolean;
}

export default function AboutUs({ darkMode }: AboutUsProps) {
  // const t = (key: string) => translations[lang]?.[key] || key;

  const stats = [
    { number: "5+", label: "Years of Experience", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Projects Delivered", icon: <Target className="w-6 h-6" /> },
    { number: "30+", label: "Happy Clients", icon: <Heart className="w-6 h-6" /> },
    { number: "15+", label: "Team Members", icon: <Users className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions that keep our clients ahead of the competition.",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality",
      description: "We maintain the highest standards in all our deliverables and processes, ensuring exceptional results that exceed expectations.",
      color: "bg-gradient-to-br from-blue-500 to-indigo-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Integrity",
      description: "We build trust through honest communication and ethical business practices, creating lasting partnerships with our clients.",
      color: "bg-gradient-to-br from-pink-500 to-red-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership to achieve great results, working closely with clients throughout every project.",
      color: "bg-gradient-to-br from-green-500 to-teal-600"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Lumen was established with a vision to make technology accessible and beneficial for all businesses."
    },
    {
      year: "2020",
      title: "First Major Project",
      description: "Successfully delivered our first enterprise-level software solution, establishing our reputation for quality."
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew our team to 10+ members and expanded our service offerings to include mobile development."
    },
    {
      year: "2022",
      title: "International Reach",
      description: "Started serving international clients and expanded our presence across multiple countries."
    },
    {
      year: "2023",
      title: "AI & ML Services",
      description: "Launched our AI and Machine Learning services, helping clients leverage cutting-edge technology."
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Continuing to innovate and expand, with plans to launch new services and reach more markets."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">About Lumen</h1>
            <p className="hero-subtitle">
              Your trusted technology partner for over 5 years
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
              <h2 className="story-title">Our Story</h2>
              <p className="story-description">
                Founded in 2019, Lumen has been at the forefront of digital innovation, helping 
                businesses across various industries transform their operations through technology. 
                We started with a simple mission: to make technology accessible and beneficial for 
                all businesses, regardless of their size.
              </p>
              <p className="story-description">
                Today, we're proud to have helped dozens of companies achieve their digital 
                transformation goals, from startups to enterprise-level organizations. Our 
                commitment to excellence and innovation continues to drive our success and 
                the success of our clients.
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
              <h3 className="mission-title">Our Mission</h3>
              <p className="mission-description">
                To empower businesses with innovative software solutions that drive growth, 
                efficiency, and competitive advantage in the digital economy.
              </p>
            </div>
            <div className="vision-card">
              <h3 className="vision-title">Our Vision</h3>
              <p className="vision-description">
                To be the leading technology partner for businesses worldwide, known for 
                delivering exceptional value and innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
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
            <h2 className="cta-title">Ready to Work With Us?</h2>
            <p className="cta-description">
              Let's discuss how we can help you achieve your technology goals and drive your business forward.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="btn-secondary">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
