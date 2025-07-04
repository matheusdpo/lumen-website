
import { 
  Handshake, 
  Users, 
  TrendingUp, 
  Award,
  Globe,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Briefcase
} from "lucide-react";

interface PartnerWithUsProps {
  lang: string;
  darkMode: boolean;
}

export default function PartnerWithUs({ }: PartnerWithUsProps) {
  // const t = (key: string) => translations[lang]?.[key] || key;

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Technical Support",
      description: "Access to our technical expertise and resources to help you deliver better solutions to your clients.",
      color: "bg-gradient-to-br from-blue-500 to-indigo-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Marketing Support",
      description: "Co-marketing opportunities and materials to help you promote our joint solutions effectively.",
      color: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Training Programs",
      description: "Comprehensive training for your team on our technologies and best practices.",
      color: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Revenue Sharing",
      description: "Attractive revenue sharing models that reward successful partnerships and growth.",
      color: "bg-gradient-to-br from-yellow-500 to-orange-600"
    }
  ];

  const partnerTypes = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Reseller Partner",
      description: "Sell our solutions directly to your clients with our full support and expertise.",
      features: ["Direct sales opportunities", "Technical support", "Marketing materials", "Competitive pricing"],
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Technology Partner",
      description: "Integrate our technologies into your existing solutions and platforms.",
      features: ["API access", "SDK integration", "Custom development", "Joint go-to-market"],
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Referral Partner",
      description: "Refer clients to us and earn commissions on successful deals and implementations.",
      features: ["Commission structure", "Lead tracking", "Marketing support", "Regular updates"],
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Solutions Inc.",
      role: "CEO",
      content: "Partnering with Lumen has been a game-changer for our business. Their technical expertise and support have helped us deliver exceptional solutions to our clients.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Digital Innovations",
      role: "CTO",
      content: "The partnership program is well-structured and the revenue sharing model is very attractive. Lumen's team is always responsive and helpful.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Cloud Systems",
      role: "VP of Sales",
      content: "We've seen significant growth in our business since partnering with Lumen. Their solutions are cutting-edge and their support is outstanding.",
      rating: 5
    }
  ];

  return (
    <div className="partner-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Partner With Us</h1>
            <p className="hero-subtitle">
              Join our network of technology partners and grow your business
            </p>
            <p className="hero-description">
              We offer comprehensive partnership programs designed to help your business 
              succeed in the digital age. Whether you're looking to expand your service 
              offerings or increase your revenue, we have the right partnership model for you.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Partner With Lumen?</h2>
            <p className="section-subtitle">
              We offer comprehensive partnership programs designed to help your business succeed in the digital age.
            </p>
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

      {/* Partner Types Section */}
      <section className="partner-types-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Partnership Types</h2>
            <p className="section-subtitle">
              Choose the partnership model that best fits your business goals
            </p>
          </div>
          <div className="partner-types-grid">
            {partnerTypes.map((type, index) => (
              <div key={index} className="partner-type-card">
                <div className={`partner-type-icon ${type.color}`}>
                  {type.icon}
                </div>
                <h3 className="partner-type-title">{type.title}</h3>
                <p className="partner-type-description">{type.description}</p>
                <ul className="partner-type-features">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="partner-type-feature">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="partner-type-btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Partners Say</h2>
            <p className="section-subtitle">
              Hear from our successful partners about their experience
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-company">{testimonial.company}</p>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How to Become a Partner</h2>
            <p className="section-subtitle">
              Simple steps to start your partnership journey with us
            </p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-number">1</div>
              <h3 className="process-title">Contact Us</h3>
              <p className="process-description">
                Reach out to our partnership team to discuss your business goals and how we can work together.
              </p>
            </div>
            <div className="process-step">
              <div className="process-number">2</div>
              <h3 className="process-title">Evaluation</h3>
              <p className="process-description">
                We'll evaluate your business and determine the best partnership model for your needs.
              </p>
            </div>
            <div className="process-step">
              <div className="process-number">3</div>
              <h3 className="process-title">Agreement</h3>
              <p className="process-description">
                Sign our partnership agreement and get access to our resources and support.
              </p>
            </div>
            <div className="process-step">
              <div className="process-number">4</div>
              <h3 className="process-title">Launch</h3>
              <p className="process-description">
                Start selling our solutions and growing your business with our full support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Partner With Us?</h2>
            <p className="cta-description">
              Join our network of successful partners and start growing your business today.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">
                Become a Partner
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="btn-secondary">
                Download Partnership Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 