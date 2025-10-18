import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("info");
  const [submitting, setSubmitting] = useState(false);

  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusType("error");
      setStatus("Please fill out all fields.");
      return;
    }

    // If a Formspree endpoint is configured, submit via fetch; otherwise fallback to mailto
    if (FORMSPREE_ENDPOINT) {
      try {
        setSubmitting(true);
        setStatusType("info");
        setStatus("Sending...");
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message })
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok) {
          setStatusType("success");
          setStatus("Thanks! Your message has been sent.");
          setFormData({ name: "", email: "", message: "" });
        } else {
          setStatusType("error");
          setStatus(data?.error || "Something went wrong. Please try again or email me directly.");
        }
      } catch (err) {
        setStatusType("error");
        setStatus("Network error. Please try again later.");
      } finally {
        setSubmitting(false);
      }
      return;
    }

    const mailto = `mailto:sddesai1603@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setStatusType("info");
    setStatus("Opening your email client...");
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">
        Get in <span>Touch</span>
      </h2>

      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-note">For enquiries or project collaborations, please email me.</p>
          <div className="info-item">
            <FaEnvelope />
            <a href="mailto:sddesai1603@gmail.com">sddesai1603@gmail.com</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              disabled={submitting}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              disabled={submitting}
            />
          </div>
          <textarea
            name="message"
            rows="6"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            disabled={submitting}
          />
          <button type="submit" className="btn-primary" disabled={submitting}>{submitting ? "Sending..." : "Send Message"}</button>
          {status && <p className={`status-message ${statusType}`}>{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;


