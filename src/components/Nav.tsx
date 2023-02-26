import React from 'react';
import './nav.css';
import nemanja from '../utils/images/nemanja.png';
import { useRefsContext } from '../refContext';

const Nav = () => {
  const { navRef } = useRefsContext();
  return (
    <nav className="nav" ref={navRef}>
      <div className="image-div">
        <img className="author-photo" src={nemanja} alt="Nemanja Malesija" />
        <p className="author-paragraph">Nemanja Malesija</p>
      </div>

      <ul className="links-list">
        <li className="list-item">Home</li>
        <li className="list-item">About</li>
        <li className="list-item">Projects</li>
        <li className="list-item list-item-contact">Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
