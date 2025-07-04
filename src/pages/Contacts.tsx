
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  ArrowRight,
  CheckCircle
} from "lucide-react";

interface ContactsProps {
  lang: string;
  darkMode: boolean;
}

export default function Contacts({ }: ContactsProps) {
  // const t = (key: string) => translations[lang]?.[key] || key;

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      value: "123 Technology Street, Innovation District, 12345",
      description: "Visit our office for a face-to-face meeting"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call us during business hours"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "contact@lumen.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      value: "Monday - Friday: 9:00 AM - 6:00 PM",
      description: "We're here to help during these hours"
    }
  ];

  const features = [
    "24/7 Technical Support",
    "Free Consultation",
    "Quick Response Time",
    "Multilingual Support",
    "Secure Communication",
    "Project Tracking"
  ];

  return (
    <div className="contacts-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Get in Touch</h1>
            <p className="hero-subtitle">
              Ready to start your digital transformation journey?
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contact Information</h2>
            <p className="section-subtitle">
              We're here to help you with all your technology needs. Reach out to us through any of the following channels.
            </p>
          </div>
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-info-icon">{info.icon}</div>
                <h3 className="contact-info-title">{info.title}</h3>
                <p className="contact-info-description">{info.value}</p>
                <p className="contact-info-description">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-content">
            <div className="contact-form-info">
              <h2 className="contact-form-title">Send us a Message</h2>
              <p className="contact-form-description">
                Have a project in mind? Want to learn more about our services? 
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <div className="contact-features">
                <h3 className="contact-features-title">Why Choose Us?</h3>
                <ul className="contact-features-list">
                  {features.map((feature, index) => (
                    <li key={index} className="contact-feature-item">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="form-input"
                    placeholder="Your company name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div className="form-group">
                <label htmlFor="title" className="form-label">Title</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    placeholder="Insert your title"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    rows={5}
                    placeholder="Tell us about your project or how we can help you..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-content">
            <h2 className="map-title">Find Us</h2>
            <p className="map-description">
              Visit our office for a face-to-face meeting or consultation
            </p>
            <div className="map-placeholder">
              <div className="map-icon">
                <MapPin className="w-12 h-12" />
              </div>
              <p>Interactive Map Coming Soon</p>
              <p className="map-address">123 Technology Street, Innovation District, 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Let's discuss your project and see how we can help you achieve your goals.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">
                Schedule a Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="btn-secondary">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 