
import React from 'react'
import './about.css'
import ME from '../../assets/vinny.jpeg'
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <SiLeetcode className='about__icon'/>
                  <h5>Leetcode</h5>
                  <small>Solved 700+ Problems</small>
              </article>
              <article className='about__card'>
                <FaGithub className='about__icon'/>
                  <h5>GitHub</h5>
                  <small>Published Tech Related Repositories</small>
              </article>
              <article className='about__card'>
                <FaLaptopCode className='about__icon'/>
                  <h5>Projects</h5>
                  <small>10+ Completed</small>
              </article>
            </div>
            <p>I am an Electronics and Communication Engineering graduate with proficiency in HTML, CSS, JavaScript, React JS for frontend, and Core Java, Core Python, MySQL, MongoDB for backend. Skilled in Bootstrap, Hibernate, Spring, Spring Boot, and intermediate in Data Structures and Algorithms with Java. Eager to apply my skills for organizational advancement.</p>  
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About