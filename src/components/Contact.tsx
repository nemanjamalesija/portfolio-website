import React, { useState, useEffect } from 'react';
import useObserver from '../helpers/useObserver';
import { useRefsContext } from '../refContext';
import './contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');
  const { formRef } = useRefsContext();
  const { sectionObserver, isObserving } = useObserver();
  const aboutObserver = sectionObserver();

  useEffect(() => {
    if (!formRef.current) return;
    aboutObserver.observe(formRef.current);

    return () => aboutObserver.disconnect();
  }, [formRef, isObserving, aboutObserver]);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xvod', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        setStatus('FAILURE');
        throw new Error('There was an error submitting the form');
      } else {
        setStatus('SUCCESS');
      }

      form.reset();
    } catch (error) {
      setStatus('FAILURE');
      console.error(error);
    }
  };

  return (
    <section
      className={`${
        isObserving ? 'section section-tansform' : 'section section-hidden'
      }`}
      ref={formRef}
    >
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
            onSubmit={handleSubmit}
          >
            <div>
              <label>
                Your email:
                <input type="email" name="email" required />
              </label>
            </div>
            <div>
              <label>
                Your name:
                <input type="tet" name="userName" required />
              </label>
            </div>
            <div>
              <label>
                Your message:
                <textarea name="message" required></textarea>
              </label>
            </div>
            {status === 'FAILURE' ? (
              <p className="p-failure">
                Oops! There was a problem submitting your form!
              </p>
            ) : status === 'SUCCESS' ? (
              <p className="p-success">
                Your message is on its way. Thank you!
              </p>
            ) : (
              <button className="btn-form" type="submit">
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
