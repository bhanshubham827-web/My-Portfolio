import { useState } from "react";
import "../CSS/Contact.css";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setMessageSent(false);
    setError(false);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSending(true);
    setMessageSent(false);
    setError(false);

    try {
      const formData = new FormData();

      formData.append(
        "access_key",
        "51ee5c0d-ce46-4ac5-9e56-6d8b49397898"
      );

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("subject", form.subject);
      formData.append("message", form.message);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessageSent(true);

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-page">

      <div className="container">

        {/* HERO */}

        <div className="contact-hero text-center">

          <span className="contact-badge">
            <i className="bi bi-envelope me-2"></i>
            Get In Touch
          </span>

          <h1 className="contact-title mt-3">
            Let's <span>Connect</span>
          </h1>

          <p className="contact-intro">
            Have a project idea, question or simply want to connect?
            Feel free to reach out. I would be happy to hear from you.
          </p>

        </div>


        {/* CONTACT CONTENT */}

        <div className="row g-4 contact-content">

          {/* LEFT */}

          <div className="col-lg-5">

            <div className="contact-info-card">

              <span className="info-label">
                CONTACT INFORMATION
              </span>

              <h2>
                Let's Start a Conversation
              </h2>

              <p>
                Whether you want to discuss a project, technology,
                collaboration or just say hello, you can contact me
                through the options below.
              </p>


              <div className="contact-info-list">

                <a
                  href="mailto:bhanshubham827@gmail.com"
                  className="contact-info-item"
                >
                  <div className="contact-info-icon">
                    <i className="bi bi-envelope"></i>
                  </div>

                  <div>
                    <span>Email</span>
                    <strong>
                      bhanshubham827@gmail.com
                    </strong>
                  </div>
                </a>


                <a
                  href="tel:+917027471070"
                  className="contact-info-item"
                >
                  <div className="contact-info-icon">
                    <i className="bi bi-telephone"></i>
                  </div>

                  <div>
                    <span>Phone</span>
                    <strong>
                      +91 7027471070
                    </strong>
                  </div>
                </a>


                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>

                  <div>
                    <span>Location</span>
                    <strong>
                      Haryana, India
                    </strong>
                  </div>

                </div>

              </div>


              <div className="contact-social">

                <span>Find Me Online</span>

                <div>

                  <a
                    href="https://github.com/bhanshubham827-web"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/shubhambhankur2003/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>

                  <a href="mailto:Pankajgoswamiiji@gmail.com">
                    <i className="bi bi-envelope"></i>
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* RIGHT - FORM */}

          <div className="col-lg-7">

            <div className="contact-form-card">

              <div className="form-header">

                <div className="form-icon">
                  <i className="bi bi-chat-dots"></i>
                </div>

                <div>
                  <h3>Send Me a Message</h3>

                  <p>
                    Fill out the form and I'll get back to you.
                  </p>
                </div>

              </div>


              {/* SUCCESS */}

              {messageSent && (
                <div className="success-message">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Your message has been sent successfully.
                </div>
              )}


              {/* ERROR */}

              {error && (
                <div className="alert alert-danger">
                  <i className="bi bi-exclamation-circle-fill me-2"></i>
                  Something went wrong. Please try again.
                </div>
              )}


              <form onSubmit={handleSubmit}>

                <div className="row g-3">

                  <div className="col-md-6">

                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="col-md-6">

                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="col-12">

                    <label htmlFor="subject">
                      Subject
                    </label>

                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      placeholder="What would you like to discuss?"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="col-12">

                    <label htmlFor="message">
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows={6}
                      placeholder="Write your message..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="col-12">

                    <button
                      type="submit"
                      className="btn btn-primary send-button"
                      disabled={sending}
                    >
                      {sending ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <i className="bi bi-send ms-2"></i>
                        </>
                      )}
                    </button>

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>


        {/* BOTTOM CTA */}

        <div className="contact-cta">

          <div>

            <span>
              <i className="bi bi-code-slash me-2"></i>
              LET'S BUILD SOMETHING
            </span>

            <h2>
              Have an idea in mind?
            </h2>

            <p>
              I'm always interested in learning, building and
              exploring new ideas through technology.
            </p>

          </div>

          <a
            href="mailto:Pankajgoswamiiji@gmail.com"
            className="btn btn-light"
          >
            <i className="bi bi-envelope me-2"></i>
            Email Me
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;