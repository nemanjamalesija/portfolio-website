import React, { useState, useEffect } from 'react';
import { useRefsContext } from '../refContext';
import NavDummy from './NavDummy';
import './hero.css';

const Hero = () => {
  const { navRef, heroRef, projectsRef } = useRefsContext();
  const [navHeight, setNavRefHeight] = useState(0);
  const [isObserving, setIsObserving] = useState(false);
  const [navSticky, setnavSticky] = useState(false);

  const scrollIntoViewHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!projectsRef.current) return;
    let scrollDistance: number;
    scrollDistance = projectsRef.current.offsetTop;
    window.scrollTo({ top: scrollDistance, behavior: 'smooth' });
  };

  // Intersection Observer
  const navObserverOptionsObject = {
    root: null,
    rootMargin: `${-navHeight}px`,
  };

  const navObserverFunctionCallback = (entries: any) => {
    const [entry] = entries;
    setIsObserving(entry.isIntersecting);

    if (!navRef.current) return;

    if (!entry.isIntersecting) {
      setnavSticky(true);
      navRef.current.classList.add('nav-sticky');
    } else {
      setnavSticky(false);
      navRef.current.classList.remove('nav-sticky');
    }
  };

  const observer = () => {
    return new IntersectionObserver(
      navObserverFunctionCallback,
      navObserverOptionsObject
    );
  };

  const heroObserver = observer();

  useEffect(() => {
    if (!navRef.current) return;
    if (!heroRef.current) return;
    heroRef.current.classList.add('animate');
    setNavRefHeight(navRef.current.clientHeight);
    heroObserver.observe(heroRef.current);

    return () => heroObserver.disconnect();
  }, [heroRef, navRef, isObserving, heroObserver]);
  return (
    <>
      {navSticky && <NavDummy />}
      <section className="section-hero" ref={heroRef}>
        <div className="container-hero">
          <p className="hi-paragraph">Hi, my name is</p>
          <h1 className="big-heading">Nemanja Malesija.</h1>
          <h2 className="smaller-heading">I turn ideas into code.</h2>
        </div>
        <button
          className="btn btn-projects-hero"
          onClick={scrollIntoViewHandler}
        >
          Check out my projects!
        </button>
      </section>
    </>
  );
};

export default Hero;
