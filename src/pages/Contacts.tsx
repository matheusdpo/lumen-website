import { useState, FormEvent } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  Globe,
  Share2,
  Loader2
} from "lucide-react";
import { translations } from "../i18n/translations";

interface ContactsProps {
  lang: string;
  darkMode: boolean;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  title: string;
  message: string;
}

export default function Contacts({ lang, darkMode }: ContactsProps) {
  const t = (key: string) => translations[lang]?.[key] || key;
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: t("phone"),
      value: t("phoneValue"),
      description: t("phoneDesc")
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t("email"),
      value: t("emailValue"),
      description: t("emailDesc")
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: t("socialMedia"),
      value: t("socialMediaValue"),
      description: t("socialMediaDesc")
    }
  ];

  const features = [
    t("feature1"),
    t("feature2"),
    t("feature3"),
    t("feature4"),
    t("feature5"),
    t("feature6")
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });

    const form = e.currentTarget;
    const formData: FormData = {
      name: (form.querySelector('[name="name"]') as HTMLInputElement).value,
      email: (form.querySelector('[name="email"]') as HTMLInputElement).value,
      company: (form.querySelector('[name="company"]') as HTMLInputElement).value || '',
      phone: (form.querySelector('[name="phone"]') as HTMLInputElement).value || '',
      title: (form.querySelector('[name="title"]') as HTMLInputElement).value || '',
      message: (form.querySelector('[name="message"]') as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch('http://localhost:3000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: t("messageSentSuccess") || "Message sent successfully!" 
        });
        form.reset();
      } else {
        const errorData = await response.json().catch(() => ({}));
        setSubmitStatus({ 
          type: 'error', 
          message: errorData.message || t("messageSentError") || "Failed to send message. Please try again." 
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: t("messageSentError") || "Failed to send message. Please try again." 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contacts-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{t("contactHeroTitle")}</h1>
            <p className="hero-subtitle">
              {t("contactHeroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t("contactInfoTitle")}</h2>
            <p className="section-subtitle">
              {t("contactInfoDesc")}
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
              <h2 className="contact-form-title">{t("contactFormTitle")}</h2>
              <p className="contact-form-description">
                {t("contactFormDescription")}
              </p>
              
              <div className="contact-features">
                <h3 className="contact-features-title">{t("whyChooseUs")}</h3>
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
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">{t("name")} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder={t("name")}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">{t("email")} *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder={t("emailValue")}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company" className="form-label">{t("company")}</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="form-input"
                    placeholder={t("company")}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">{t("phoneField")}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    placeholder={"+1 (00) 00000-0000"}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="title" className="form-label">{t("titleField")}</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-input"
                    placeholder={t("titleField")}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">{t("message")} *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    rows={5}
                    placeholder={t("message")}
                    required
                  ></textarea>
                </div>
                
                {submitStatus.type && (
                  <div className={`form-message ${submitStatus.type === 'success' ? 'form-message-success' : 'form-message-error'}`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {t("sending") || "Sending..."}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {t("sendMessage")}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
} 