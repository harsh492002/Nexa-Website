import React from 'react'
import { FaArrowRight, FaCode, FaServer, FaMobile, FaCloud, FaShieldAlt } from 'react-icons/fa'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transform Your Business with
              <span className="text-primary"> Cutting-Edge Technology</span>
            </h1>
            <p className="hero-description">
              We deliver innovative IT solutions that drive growth, enhance efficiency, 
              and secure your digital future. From custom software development to cloud 
              infrastructure, we're your trusted technology partner.
            </p>
            <div className="hero-actions">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Start Your Project
                <FaArrowRight className="btn-icon" />
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('services')}
              >
                Our Services
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="floating-cards">
              <div className="floating-card card-1">
                <FaCode className="card-icon" />
                <span>Web Development</span>
              </div>
              <div className="floating-card card-2">
                <FaMobile className="card-icon" />
                <span>Mobile Apps</span>
              </div>
              <div className="floating-card card-3">
                <FaServer className="card-icon" />
                <span>Backend Services</span>
              </div>
              <div className="floating-card card-4">
                <FaCloud className="card-icon" />
                <span>Cloud Solutions</span>
              </div>
              <div className="floating-card card-5">
                <FaShieldAlt className="card-icon" />
                <span>Cybersecurity</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding-top: 100px;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
        }

        .hero-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1.25rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .btn-icon {
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }

        .btn:hover .btn-icon {
          transform: translateX(4px);
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #60a5fa;
        }

        .stat-label {
          font-size: 0.875rem;
          opacity: 0.8;
        }

        .hero-visual {
          position: relative;
          height: 500px;
        }

        .floating-cards {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .floating-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          animation: float 6s ease-in-out infinite;
        }

        .floating-card:nth-child(1) {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-card:nth-child(2) {
          top: 20%;
          right: 20%;
          animation-delay: 1s;
        }

        .floating-card:nth-child(3) {
          top: 50%;
          left: 5%;
          animation-delay: 2s;
        }

        .floating-card:nth-child(4) {
          top: 60%;
          right: 10%;
          animation-delay: 3s;
        }

        .floating-card:nth-child(5) {
          top: 80%;
          left: 30%;
          animation-delay: 4s;
        }

        .card-icon {
          font-size: 2rem;
          color: #60a5fa;
        }

        .floating-card span {
          font-size: 0.875rem;
          font-weight: 500;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .hero-stats {
            justify-content: center;
          }

          .hero-visual {
            height: 300px;
          }

          .floating-card {
            padding: 1rem;
          }

          .card-icon {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
