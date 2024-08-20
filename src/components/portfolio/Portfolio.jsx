import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/ccc.PNG';
import IMG3 from '../../assets/ventpods.PNG';
import IMG4 from '../../assets/summie.PNG';
import IMG5 from '../../assets/realestate.PNG';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id:1,
    image:IMG1,
    title:'Full Stack image sharing App. Developed using React, Tailwind and Sanity Content Management System for the Backend',
    github:'https://github.com/MetaphorX/sharepic',
    demo:'https://pinphoto.netlify.app/'
  },
  {
    id:2,
    image:IMG2,
    title:'Real Estate Property Listing. Developed using Nextjs, Tailwindcss and Sanity Content Management System',
    github:'https://github.com/MetaphorX/',
    demo:'https://chrisoconstruction.netlify.app/'
  },
  {
    id:3,
    image:IMG3,
    title:'Ventpods mobile app',
    github:'https://github.com',
    demo:'https://tgventpods.netlify.app/'
  },
  {
    id:4,
    image:IMG4,
    title:'Full Stack Workout App, Developed using React, MongoDB and Tailwind css',
    github:'https://github.com/MetaphorX',
    demo:'https://github.com/MetaphorX'
  },
  {
    id:5,
    image:IMG5,
    title:'Real Estate app built with Nextjs',
    github:'https://github.com',
    demo:'https://emex-management.vercel.app/'
  },

  // {
  //   id:6,
  //   image:IMG6,
  //   title:'Crypto Currency Dashboard & Financial Visualization',
  //   github:'https://github.com',
  //   demo:'https://dribbble.com/alien_pixels'
  // }
]



const Portfolio = () => {
  return (
    <section id="portfolio"> 
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
        
        
      </div>
  </section>
  )
}

export default Portfolio