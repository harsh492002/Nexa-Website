import React from 'react'
import { FaUsers, FaAward, FaRocket, FaHandshake, FaLightbulb, FaGlobe } from 'react-icons/fa'

const About = () => {
  const stats = [
    { icon: <FaUsers />, number: "50+", label: "Happy Clients" },
    { icon: <FaAward />, number: "500+", label: "Projects Completed" },
    { icon: <FaRocket />, number: "5+", label: "Years Experience" },
    { icon: <FaGlobe />, number: "15+", label: "Countries Served" }
  ]

  const values = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "We stay ahead of technology trends and implement cutting-edge solutions that give you a competitive advantage."
    },
    {
      icon: <FaHandshake />,
      title: "Partnership",
      description: "We work as an extension of your team, building long-term relationships based on trust and mutual success."
    },
    {
      icon: <FaRocket />,
      title: "Excellence",
      description: "We deliver high-quality solutions that exceed expectations and drive measurable business results."
    }
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Nexa IT Solutions</h2>
            <p className="about-description">
              We are a leading IT solutions company dedicated to transforming businesses through
              innovative technology. Our team of expert developers, designers, and consultants
              work together to deliver exceptional results that drive growth and efficiency.
            </p>
            <p className="about-description">
              Founded in 2019, we have successfully completed over 500 projects for clients
              across various industries. Our commitment to quality, innovation, and customer
              satisfaction has made us a trusted partner for businesses worldwide.
            </p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-content">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual">
            <div className="about-image">
              <div className="image-placeholder">
                <FaUsers className="placeholder-icon" />
                <span>Our Amazing Team</span>
              </div>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h3 className="values-title">Our Core Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
        }

        .about-description {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #64748b;
          margin-bottom: 1.5rem;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }
            .stat-item {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

        .stat-item:hover {
            transform: translateY(-4px);
        }

        .stat-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.25rem;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
    font-size: 2.2rem;
    font-weight: 800;
    letter-spacing: 0.5px;

    /* Gradient text */
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    margin-bottom: 4px;
}

.stat-label {
    font-size: 0.85rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #9ca3af;
}

        .about-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about-image {
          width: 100%;
          max-width: 400px;
        }

        .image-placeholder {
          width: 100%;
          height: 300px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .placeholder-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          opacity: 0.8;
        }

        .image-placeholder span {
          font-size: 1.25rem;
          font-weight: 500;
        }

        .values-section {
          margin-top: 4rem;
          padding-top: 4rem;
          border-top: 1px solid #e2e8f0;
        }

        .values-title {
          font-size: 2rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 3rem;
          color: #1e293b;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .value-card {
          text-align: center;
          padding: 2rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .value-icon {
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
        }

        .value-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .value-description {
          color: #64748b;
          line-height: 1.6;
        }
          .stat {
         transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat:hover {
            transform: translateY(-4px);
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-stats {
            grid-template-columns: 1fr;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .image-placeholder {
            height: 250px;
          }

          .placeholder-icon {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  )
}

export default About
