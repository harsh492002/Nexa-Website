import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "info@nexait.com",
      description: "We'll reply within 24 hours"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Office",
      details: "123 Tech Street, Silicon Valley, CA 94000",
      description: "Visit us at our headquarters"
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      details: "Monday - Friday: 8:00 AM - 6:00 PM",
      description: "Weekend support available"
    }
  ]

  const services = [
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "Cybersecurity",
    "Data Analytics",
    "DevOps & Automation",
    "IT Support",
    "Other"
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start your next project? Let's discuss how we can help transform your business.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Start a Conversation</h3>
            <p>
              We're here to help you succeed. Whether you have a specific project in mind 
              or need guidance on the best technology solutions for your business, our 
              team is ready to assist you.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <p className="contact-detail">{info.details}</p>
                    <p className="contact-description">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                <FaPaperPlane className="btn-icon" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
        }

        .contact-info h3 {
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .contact-info p {
          color: #64748b;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .contact-text h4 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: #1e293b;
        }

        .contact-detail {
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.25rem;
        }

        .contact-description {
          font-size: 0.875rem;
          color: #64748b;
        }

        .contact-form-container {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: #374151;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.75rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          background: white;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #2563eb;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit {
          align-self: flex-start;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-icon {
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-form-container {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact
