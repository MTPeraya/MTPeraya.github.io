import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form would typically send to a backend service or email service
    console.log("Form submitted:", formData);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section className="contact">
      <div className="section-header">
        <h1>Get In Touch</h1>
        <p>Let's connect and discuss opportunities to work together</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Talk</h2>
          <p>
            Whether you're interested in collaborating on a project, discussing opportunities, or just saying hello —
            I'd love to hear from you!
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <h3>📧 Email</h3>
              <a href="mailto:your.email@example.com">your.email@example.com</a>
              <p className="method-note">[UPDATE WITH YOUR EMAIL]</p>
            </div>

            <div className="contact-method">
              <h3>💼 LinkedIn</h3>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                Visit my LinkedIn
              </a>
              <p className="method-note">[UPDATE WITH YOUR LINKEDIN URL]</p>
            </div>

            <div className="contact-method">
              <h3>💻 GitHub</h3>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                View my code
              </a>
              <p className="method-note">[UPDATE WITH YOUR GITHUB URL]</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me more..."
                rows="6"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>

            {submitStatus === "success" && (
              <div className="form-feedback success">✓ Message sent! I'll get back to you soon.</div>
            )}
          </form>
        </div>
      </div>

      <div className="contact-cta">
        <h2>Prefer another way to connect?</h2>
        <p>
          Feel free to reach out directly through email or social media. I'm always open to interesting conversations
          and new opportunities.
        </p>
      </div>
    </section>
  );
};
