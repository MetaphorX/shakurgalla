import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi';


const Services = () => {
  return (
    <section id="services"> 
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Fast and scalable web Apps </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ecommerce Development </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frontend Develpment</p>
            </li>

          </ul>
        </article>
        {/* UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>APIs</h3>
          </div>
          <ul className="service__list">
            
            <li>
              <BiCheck className="service__list-icon" />
              <p>API Development </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>API testing </p>
            </li>
            
            </ul>
          </article>

          <article className="service">
          <div className="service__head">
            <h3>Blockchain and Web3</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop DApps </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Smart Contract Writing </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Technical Writing </p>
            </li>
          </ul>
        </article>
        {/* Web Dev*/}

      </div>
    </section>
  )
}

export default Services