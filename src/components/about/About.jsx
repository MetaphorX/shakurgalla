import React from 'react'
import './about.css';
import ME from '../../assets/shakur.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1 Year working experience</small>
            </article>

            {/* <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>2 clients</small>
            </article> */}

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>4 Completed Projects</small>
            </article>
          </div>
          <p>
            I am a full stack developer with strong passion for identifying and solving problems.
            I utilize the MERN stack together with Sanity Studio to deliver fast and scalable apps, I believe
            in making things simple and easy as it leads to more progress and advancement.
            I am currently seeking a full time role, whilst freelancing.
          </p>

          <a href="#contact" className='btn btn-danger'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About