import React from "react";
import "./footer.css";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        Shakur Galla
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/shakur.imperiale">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/shakur_galla">
          <FiInstagram />
        </a>
        <a href="https:/twitter.com/imperiale09">
          <IoLogoTwitter />
        </a>
        <a href="https://linkedin.com/shakur-galla">
          <BsLinkedin />
        </a>
        <a href="https://linkedin.com/shakur-galla">
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Shakur Galla. All rights reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
