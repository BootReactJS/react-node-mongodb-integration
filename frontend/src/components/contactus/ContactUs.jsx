import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            We’d love to hear from you. Send us a message and our team will get
            back to you soon.
          </p>

          <div className="info-list">
            <div className="info-item">
              <span>📍</span>
              <div>
                <strong>Address</strong>
                <span>123 Main Street, New York, NY</span>
              </div>
            </div>

            <div className="info-item">
              <span>📞</span>
              <div>
                <strong>Phone</strong>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            <div className="info-item">
              <span>✉️</span>
              <div>
                <strong>Email</strong>
                <span>hello@example.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div className="form-group full-width">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Subject" />
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;