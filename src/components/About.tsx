import React, { useEffect } from 'react';
import useObserver from '../helpers/useObserver';
import { useRefsContext } from '../refContext';
import './about.css';

const About = () => {
  const { aboutRef } = useRefsContext();
  const { sectionObserver, isObserving } = useObserver();
  const aboutObserver = sectionObserver();

  useEffect(() => {
    if (!aboutRef.current) return;
    aboutObserver.observe(aboutRef.current);

    return () => aboutObserver.disconnect();
  }, [aboutRef, isObserving, aboutObserver]);
  return (
    <section
      className={`${
        isObserving ? 'section section-tansform' : 'section section-hidden'
      }`}
      ref={aboutRef}
    >
      <div className="container container-about">
        <header className="header header-about">
          <h3 className="subheading">About me</h3>
          <h2 className="heading-secondary">
            Who I am, what I do and what I know.
          </h2>
        </header>
        <div className="container-content">
          <div className="about-left">
            <p className="about-paragraph">
              Hello! My name is Nemanja (J is silent) and I'm a Web Developer
              who loves to work with JavaScript technologies. Right now my mind
              is focused on learning everything that is related to Web
              Development. I'm also passionate about exploring new technologies
              which I can leverage to solve real-life problems.
            </p>
          </div>
          <div className="about-right">
            <h3 className="subheading">My skills</h3>
            <div className="container-skills">
              <span className="skill">HTML5</span>
              <span className="skill">CSS3</span>
              <span className="skill">BootStrap</span>
              <span className="skill">SAAS</span>
              <span className="skill">Javascript</span>
              <span className="skill">React</span>
              <span className="skill">React Query</span>
              <span className="skill">Typescript</span>
              <span className="skill">Git</span>
              <span className="skill">Responsive Design</span>
              <span className="skill">User Accesibility</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
