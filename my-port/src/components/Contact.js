import React, { useState } from "react";
import "./Contact.css";
import { SendHorizonal } from "lucide-react";

// Inline brand icons — this lucide-react version doesn't include them
const MailIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const LinkedinIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const socials = [
  { icon: <MailIcon size={22} />, label: "Email", href: "mailto:m.perayalsc@gmail.com", value: "m.perayalsc@gmail.com" },
  { icon: <LinkedinIcon size={22} />, label: "LinkedIn", href: "https://www.linkedin.com/in/peraya-lsc/", value: "linkedin.com/in/peraya-lsc/" },
  { icon: <GithubIcon size={22} />, label: "GitHub", href: "https://github.com/MTPeraya", value: "github.com/MTPeraya" },
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact">
      {/* Section label + bold two-line heading */}
      <div className="contact-title-row">
        <span className="contact-label">03 — Contact</span>
        <h1 className="contact-heading">
          Let's build something <span className="contact-heading-accent">together.</span>
        </h1>
        <p className="contact-subheading">
          Whether it's a new project, an opportunity, or just a hello, my inbox is always open.
        </p>
      </div>

      <div className="contact-layout">
        {/* Left: Socials */}
        <div className="contact-left">
          <p className="contact-reach">Reach me directly</p>
          <div className="contact-socials">
            {socials.map(({ icon, label, href, value }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-card">
                <div className="social-icon">{icon}</div>
                <div className="social-info">
                  <span className="social-label">{label}</span>
                  <span className="social-value">{value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Minimal form */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Your name" required />
              </div>
              <div className="form-field">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" required />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="cf-message">Message</label>
              <textarea id="cf-message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me what's on your mind..." rows="6" required />
            </div>
            <button type="submit" className="form-submit">
              <SendHorizonal size={18} />
              Send Message
            </button>
            {submitted && (
              <div className="form-success">✓ Sent! I'll get back to you soon.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
