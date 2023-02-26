import React from 'react';
import './nav.css';
import nemanja from '../utils/images/nemanja.png';
import { useRefsContext } from '../refContext';

const Nav = () => {
  const { navRef } = useRefsContext();
  const { heroRef, aboutRef, projectsRef, formRef } = useRefsContext();

  const scrollToHero = (e: any) => {
    if (!heroRef.current) return;
    let scrollDistance: number;
    scrollDistance = heroRef.current.offsetTop - 100;
    window.scrollTo({ top: scrollDistance, behavior: 'smooth' });
  };

  const scrollToAbout = (e: any) => {
    if (!aboutRef.current) return;
    let scrollDistance: number;
    scrollDistance = aboutRef.current.offsetTop;
    window.scrollTo({ top: scrollDistance, behavior: 'smooth' });
  };

  const scrollToProjects = (e: any) => {
    if (!projectsRef.current) return;
    let scrollDistance: number;
    scrollDistance = projectsRef.current.offsetTop;
    window.scrollTo({ top: scrollDistance, behavior: 'smooth' });
  };

  const scrollToForm = (e: any) => {
    if (!formRef.current) return;
    let scrollDistance: number;
    scrollDistance = formRef.current.offsetTop;
    window.scrollTo({ top: scrollDistance, behavior: 'smooth' });
  };

  const handleHover = (e: any) => {
    const links = e.currentTarget.querySelectorAll('.list-item');
    const currentLink = e.target;

    links.forEach((link: any) => {
      link.classList.remove('full-opacity');
      link.classList.add('half-opacity');
      if (currentLink) currentLink.classList.add('full-opacity');
    });
  };

  const handleLeave = (e: any) => {
    const links = e.currentTarget.querySelectorAll('.list-item');
    links.forEach((link: any) => {
      link.classList.remove('half-opacity');
      link.classList.remove('full-opacity');
    });
  };

  return (
    <nav className="nav" ref={navRef}>
      <div className="image-div" onClick={scrollToHero}>
        <img className="author-photo" src={nemanja} alt="Nemanja Malesija" />
        <p className="author-paragraph">Nemanja Malesija</p>
      </div>

      <ul
        className="links-list"
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
      >
        <li className="list-item" onClick={scrollToHero}>
          Home
        </li>
        <li className="list-item" onClick={scrollToAbout}>
          About
        </li>
        <li className="list-item" onClick={scrollToProjects}>
          Projects
        </li>
        <li className="list-item list-item-contact" onClick={scrollToForm}>
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
