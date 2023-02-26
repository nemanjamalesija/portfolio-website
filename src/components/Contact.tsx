import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="section section-contact">
      <div className="container container-contact">
        <div className="form-container">
          <h2 className="heading-secondary heading-form">
            Let's get in touch!
          </h2>
          <p className="form-paragraph">
            Feel free to leave me a message. I'll get back to you as soon as I
            can!
          </p>

          <form
            className="form-contact"
            action="https://formspree.io/f/xpzedvod"
            method="POST"
          >
            <div>
              <label>
                Your email:
                <input type="email" name="email" />
              </label>
            </div>

            <div>
              <label>
                Your name:
                <input type="tet" name="userName" />
              </label>
            </div>
            <div>
              <label>
                Your message:
                <textarea name="message"></textarea>
              </label>
            </div>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
