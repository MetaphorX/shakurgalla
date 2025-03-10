import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaBootstrap, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiSolidity,
  SiMysql,
  SiLaravel,
} from "react-icons/si";
import { DiNodejs, DiMongodb } from "react-icons/di";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light"> Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light"> Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light"> Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <DiNodejs className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiLaravel className="experience__details-icon" />
              <div>
                <h4>Laravel</h4>
                <small className="text-light"> Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiExpress className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light"> Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiSolidity className="experience__details-icon" />
              <div>
                <h4>Solidity</h4>
                <small className="text-light"> Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <DiMongodb className="experience__details-icon" />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMysql className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
