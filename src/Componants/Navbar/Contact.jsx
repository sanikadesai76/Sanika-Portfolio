    import { useState } from "react";
    import { FaEnvelope } from "react-icons/fa";
    import emailjs from '@emailjs/browser';
    import "./Contact.css";

    const Contact = () => {
      const [formData, setFormData] = useState({ name: "", email: "", message: "" });
      const [status, setStatus] = useState("");
      const [statusType, setStatusType] = useState("info");
      const [submitting, setSubmitting] = useState(false);

  // EmailJS Configuration - Replace with your actual values
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_xxxxxxx";
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_xxxxxxx";
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

  // Debug: Log configuration (remove this after setup is complete)
  console.log("EmailJS Configuration:", {
    serviceId: EMAILJS_SERVICE_ID,
    templateId: EMAILJS_TEMPLATE_ID,
    publicKey: EMAILJS_PUBLIC_KEY ? `${EMAILJS_PUBLIC_KEY.substring(0, 10)}...` : "Not set"
  });

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

        try {
          setSubmitting(true);
          setStatusType("info");
          setStatus("Sending...");

          // Initialize EmailJS with your public key
          emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "sddesai1603@gmail.com", // Your email address
          to_name: "Sanika", // Your name
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

          if (result.status === 200) {
            setStatusType("success");
            setStatus("Thanks! Your message has been sent successfully.");
            setFormData({ name: "", email: "", message: "" });
          } else {
            setStatusType("error");
            setStatus("Something went wrong. Please try again.");
          }
    } catch (error) {
      console.error("EmailJS Error:", error);
      console.error("Error details:", {
        message: error.message,
        status: error.status,
        text: error.text
      });
      
      // More specific error messages
      if (error.message?.includes("Invalid public key")) {
        setStatus("Configuration error: Invalid EmailJS public key. Please check your .env file.");
      } else if (error.message?.includes("Service not found")) {
        setStatus("Configuration error: EmailJS service not found. Please check your service ID.");
      } else if (error.message?.includes("Template not found")) {
        setStatus("Configuration error: EmailJS template not found. Please check your template ID.");
      } else if (error.message?.includes("Invalid template")) {
        setStatus("Configuration error: Invalid EmailJS template. Please check your template setup.");
      } else {
        setStatus(`Failed to send message: ${error.message || 'Unknown error'}. Please try again or email me directly at sddesai1603@gmail.com`);
      }
      setStatusType("error");
    } finally {
      setSubmitting(false);
    }
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


