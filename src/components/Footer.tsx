import React from 'react';
import github from '../utils/images/github.png';
import linkedin from '../utils/images/linkedin.png';

import './footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-upper">
          <div className="footer-row footer-row-1">
            <div className="main-footer-social">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/nemanjamalesija"
              >
                <img className="footer-icon" src={github} alt="icon" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/nemanja-malesija"
              >
                <img className="footer-icon" src={linkedin} alt="icon" />
              </a>
            </div>
          </div>
          <div className="footer-center">
            <h4 className="heading-fourth">Nemanja Malesija</h4>
            <h5 className="heading-fifth">Web developer</h5>
            <p className="footer-mail">malesija15@gmail.com</p>
          </div>
        </div>

        <div className="footer-lower">
          &copy; Copyright 2023. Made by
          <p className="footer-p">Nemanja Malesija</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
