import React, { useState } from 'react'
import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "A full-stack e-commerce solution with React frontend and Node.js backend, featuring payment integration and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      description: "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      technologies: ["React Native", "Firebase", "Biometric Auth"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Cloud Infrastructure",
      category: "cloud",
      description: "Scalable cloud infrastructure setup with auto-scaling, load balancing, and monitoring solutions.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Data Analytics Dashboard",
      category: "web",
      description: "Interactive dashboard for business intelligence with real-time data visualization and reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "IoT Monitoring System",
      category: "iot",
      description: "Internet of Things solution for real-time device monitoring and predictive maintenance.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
      technologies: ["Python", "MQTT", "InfluxDB", "Grafana"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "AI Chatbot Platform",
      category: "ai",
      description: "Intelligent chatbot platform with natural language processing and machine learning capabilities.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "NLP", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'cloud', label: 'Cloud Solutions' },
    { id: 'iot', label: 'IoT Solutions' },
    { id: 'ai', label: 'AI & ML' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="section bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Explore our recent projects and see how we've helped businesses transform through technology.
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-actions">
                    <a href={project.liveUrl} className="action-btn" title="View Live">
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.githubUrl} className="action-btn" title="View Code">
                      <FaGithub />
                    </a>
                    <button className="action-btn" title="View Details">
                      <FaEye />
                    </button>
                  </div>
                </div>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .portfolio-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 3rem 0;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid #e2e8f0;
          background: white;
          color: #64748b;
          border-radius: 50px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          border-color: #2563eb;
          color: #2563eb;
        }

        .filter-btn.active {
          background: #2563eb;
          border-color: #2563eb;
          color: white;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .portfolio-item {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .portfolio-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .portfolio-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .portfolio-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .portfolio-item:hover .portfolio-image img {
          transform: scale(1.05);
        }

        .portfolio-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(37, 99, 235, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .portfolio-item:hover .portfolio-overlay {
          opacity: 1;
        }

        .portfolio-actions {
          display: flex;
          gap: 1rem;
        }

        .action-btn {
          width: 50px;
          height: 50px;
          background: white;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
          font-size: 1.25rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .action-btn:hover {
          background: #f8fafc;
          transform: scale(1.1);
        }

        .portfolio-content {
          padding: 1.5rem;
        }

        .portfolio-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1e293b;
        }

        .portfolio-description {
          color: #64748b;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .portfolio-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: #f1f5f9;
          color: #475569;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
          }

          .portfolio-filters {
            gap: 0.5rem;
          }

          .filter-btn {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Portfolio
