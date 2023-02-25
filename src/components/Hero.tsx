import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="container-hero">
        <p className="hi-paragraph">Hi, my name is</p>
        <h1 className="big-heading">Nemanja Malesija.</h1>
        <h2 className="smaller-heading">I turn ideas into code.</h2>
      </div>
      <button className="btn btn-projects-hero">Check out my projects!</button>
    </section>
  );
};

export default Hero;
