import React from 'react'
import { 
  FaCode, 
  FaMobile, 
  FaServer, 
  FaCloud, 
  FaShieldAlt, 
  FaDatabase,
  FaCog,
  FaChartLine,
  FaHeadset
} from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Node.js, and Python.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible"]
    },
    {
      icon: <FaMobile />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      features: ["iOS & Android", "Cross-platform", "Native Performance", "App Store Ready"]
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Robust server-side solutions with scalable APIs, microservices, and database management.",
      features: ["RESTful APIs", "Microservices", "Database Design", "Cloud Integration"]
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description: "Cloud migration, infrastructure setup, and management on AWS, Azure, and Google Cloud.",
      features: ["Cloud Migration", "Auto Scaling", "Cost Optimization", "24/7 Monitoring"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from cyber threats and data breaches.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"]
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      description: "Database design, optimization, and management for improved performance and reliability.",
      features: ["Database Design", "Performance Tuning", "Backup & Recovery", "Data Migration"]
    },
    {
      icon: <FaCog />,
      title: "DevOps & Automation",
      description: "CI/CD pipelines, infrastructure automation, and deployment strategies for faster delivery.",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring", "Automated Testing"]
    },
    {
      icon: <FaChartLine />,
      title: "Data Analytics",
      description: "Business intelligence solutions to help you make data-driven decisions and insights.",
      features: ["Data Visualization", "Business Intelligence", "Predictive Analytics", "Custom Dashboards"]
    },
    {
      icon: <FaHeadset />,
      title: "IT Support",
      description: "24/7 technical support and maintenance services to keep your systems running smoothly.",
      features: ["24/7 Support", "System Maintenance", "Troubleshooting", "Performance Monitoring"]
    }
  ]

  return (
    <section id="services" className="section bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button className="btn btn-primary service-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .service-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #2563eb, #3b82f6);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .service-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 2rem;
          color: white;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1);
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .service-description {
          color: #64748b;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .service-features {
          list-style: none;
          margin-bottom: 2rem;
          text-align: left;
        }

        .service-features li {
          padding: 0.5rem 0;
          color: #64748b;
          position: relative;
          padding-left: 1.5rem;
        }

        .service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }

        .service-btn {
          width: 100%;
          margin-top: auto;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .service-card {
            padding: 1.5rem;
          }

          .service-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Services
