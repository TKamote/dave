import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

interface Template {
  title: string;
  description: string;
  category: string;
  image?: string;
}

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const landingPageTemplates: Template[] = [
    {
      title: "General Inspection",
      description: "Carry out inspection easily with this tool",
      category: "LANDING PAGE TEMPLATES",
      image: "../src/assets/images/Inspection.jpeg",
    },
    {
      title: "3 x 2 Landscape",
      description: "An A4 landscape mode 3 x 2 document will be genarated",
      category: "LANDING PAGE TEMPLATES",
      image: "../src/assets/images/3x2grid.jpeg",
    },
    {
      title: "2 x 2 Portrait",
      description: "An A4 portrait mode 3 x 2 document will be genarated",
      category: "LANDING PAGE TEMPLATES",
      image: "../src/assets/images/2x2grid.jpeg",
    },
    {
      title: "Basic FSM",
      description: "Basic FSM Inspection Report will be genarated",
      category: "LANDING PAGE TEMPLATES",
      image: "../src/assets/images/2x2grid.jpeg",
    },
    {
      title: "FSM Plus",
      description: "A FSM Report with related observation will be genarated",
      category: "LANDING PAGE TEMPLATES",
      image: "../src/assets/images/2x2grid.jpeg",
    },
    {
      title: "SCDF Form",
      description:
        "An inspection in preparation for FC renewal certificaation will be genarated",
      category: "LANDING PAGE TEMPLATES",
      image: "../src/assets/images/2x2grid.jpeg",
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

  const handleTemplateClick = (templateType: string) => {
    navigate(`/inspection/${templateType}`);
  };

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
            <h2>INSPECTION TEMPLATES</h2>
            <a href="#" className="view-all">
              All Ispection Templates →
            </a>
          </div>
          <div className="templates-grid">
            {landingPageTemplates.map((template, index) => (
              <div
                key={index}
                className="template-card"
                onClick={() =>
                  handleTemplateClick(
                    template.title.toLowerCase().replace(/\s+/g, "-")
                  )
                }
                style={{ cursor: "pointer" }}
              >
                <img src={template.image} alt={template.title} />
                <div className="template-info">
                  <h3>{template.title}</h3>
                  <p>{template.description}</p>
                  <span className="category">{template.category}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="template-section">
          <div className="section-header">
            <h2>CBA TEMPLATES</h2>
            <a href="#" className="view-all">
              All CBA Templates →
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
