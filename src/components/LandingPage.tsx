import React from "react";
import "./LandingPage.css";

interface Template {
  title: string;
  description: string;
  category: string;
  image?: string;
}

const LandingPage: React.FC = () => {
  const landingPageTemplates: Template[] = [
    {
      title: "Lead Capture",
      description: "Grow your leads with free offers and incentives",
      category: "LANDING PAGE TEMPLATES",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Lead+Capture",
    },
    {
      title: "Offers & Promotions",
      description: "Promote your latest offers and discounts",
      category: "LANDING PAGE TEMPLATES",
      image:
        "https://placehold.co/600x400/e2e8f0/1e293b?text=Offers+%26+Promotions",
    },
    {
      title: "Social Bio Link",
      description: "Turn your social followers into leads and customers",
      category: "LANDING PAGE TEMPLATES",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Social+Bio+Link",
    },
    {
      title: "Sales",
      description: "Monetize with sales pages, upsell funnels and checkouts",
      category: "LANDING PAGE TEMPLATES",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Sales",
    },
    {
      title: "Consultation",
      description:
        "Offer free consultations and promote your brand and services",
      category: "LANDING PAGE TEMPLATES",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Consultation",
    },
    {
      title: "Webinar & Virtual Event",
      description:
        "Make it easy for leads to sign up for your webinars and virtual events",
      category: "LANDING PAGE TEMPLATES",
      image:
        "https://placehold.co/600x400/e2e8f0/1e293b?text=Webinar+%26+Virtual+Event",
    },
  ];

  const websiteTemplates: Template[] = [
    {
      title: "Conferences & Events",
      description:
        "The perfect way to get registrants and share details for your next event",
      category: "WEBSITE TEMPLATES",
      image:
        "https://placehold.co/600x400/e2e8f0/1e293b?text=Conferences+%26+Events",
    },
    {
      title: "Mini Sites",
      description: "Create websites for products, services, and promotions",
      category: "WEBSITE TEMPLATES",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Mini+Sites",
    },
    {
      title: "Podcast & App",
      description: "Promote your podcast, app, or sub-brand with a website",
      category: "WEBSITE TEMPLATES",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Podcast+%26+App",
    },
  ];

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">
            <img
              src="https://placehold.co/120x32/6366f1/ffffff?text=Logo"
              alt="Logo"
              className="logo-image"
            />
          </div>
          <div className="nav-links">
            <button className="nav-button">Platform</button>
            <button className="nav-button">Solutions</button>
            <button className="nav-button active">Templates</button>
            <button className="nav-button">Resources</button>
            <button className="nav-button">Pricing</button>
          </div>
        </div>
        <div className="nav-right">
          <button className="login-button">Log in</button>
          <button className="signup-button">Sign Up Free</button>
        </div>
      </nav>

      <main className="main-content">
        <section className="template-section">
          <div className="section-header">
            <h2>LANDING PAGE TEMPLATES</h2>
            <a href="#" className="view-all">
              All Landing Page Templates →
            </a>
          </div>
          <div className="template-grid">
            {landingPageTemplates.map((template, index) => (
              <div key={index} className="template-card">
                {template.image && (
                  <div className="template-image">
                    <img src={template.image} alt={template.title} />
                  </div>
                )}
                <div className="template-content">
                  <h3>{template.title}</h3>
                  <p>{template.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="template-section">
          <div className="section-header">
            <h2>WEBSITE TEMPLATES</h2>
            <a href="#" className="view-all">
              All Site Templates →
            </a>
          </div>
          <div className="template-grid">
            {websiteTemplates.map((template, index) => (
              <div key={index} className="template-card">
                {template.image && (
                  <div className="template-image">
                    <img src={template.image} alt={template.title} />
                  </div>
                )}
                <div className="template-content">
                  <h3>{template.title}</h3>
                  <p>{template.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
