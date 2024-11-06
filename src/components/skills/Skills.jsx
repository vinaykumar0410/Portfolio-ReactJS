import React from 'react'
import './skills.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiPostman, SiTailwindcss } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { FaGolang } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
const Skills = () => {
    return (
        <section id='skills'>
          <h5>What Skills I Have</h5>
          <h2>My Skills</h2>
          <div className="container skills__container">
            <div className="skills__frontend">
              <h3>Frontend Development</h3>
              <div className="skills__content">
                <article className='skills__details'><FaHtml5 className='skills__details-icon'/>
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>
                </article>  
                <article className='skills__details'><FaCss3Alt className='skills__details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                </article>
                <article className='skills__details'><TbBrandJavascript className='skills__details-icon'/>
                <div>
                <h4>Java Script</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                </article>
                <article className='skills__details'><FaReact className='skills__details-icon'/>
                <div>
                <h4>React JS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                </article> 
                <article className='skills__details'><FaBootstrap className='skills__details-icon'/>
                  <div>
                    <h4>Bootstrap</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article> 
                <article className='skills__details'><SiTailwindcss className='skills__details-icon'/>
                  <div>
                    <h4>Tailwind CSS</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article> 
                <article className='skills__details'><SiFlutter className='skills__details-icon'/>
                  <div>
                    <h4>Flutter</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article> 
                <article className='skills__details'><SiNextdotjs className='skills__details-icon'/>
                  <div>
                    <h4>Next JS</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article> 
              </div>
            </div>
            <div className="skills__backend">
              <h3>Backend Development</h3>
              <div className="skills__content">
                <article className='skills__details'><FaJava className='skills__details-icon'/>
                <div>
                <h4>Java</h4>
                <small className='text-light'>Advanced</small>

                </div>
                </article>  
                <article className='skills__details'><FaPython className='skills__details-icon'/>
                  <div>
                  <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='skills__details'><FaGolang className='skills__details-icon'/>
                  <div>
                  <h4>Go Lang</h4>
                <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='skills__details'><SiMysql className='skills__details-icon'/>
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small></div>
                </article>
                <article className='skills__details'><SiMongodb className='skills__details-icon'/>
                <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small></div>
                </article> 
                <article className='skills__details'><SiExpress className='skills__details-icon'/>
                <div>
                <h4>Express JS</h4>
                <small className='text-light'>Intermediate</small></div>
                </article> 
                <article className='skills__details'><SiPostman className='skills__details-icon'/>
                <div>
                <h4>Postman</h4>
                <small className='text-light'>Intermediate</small></div>
                </article> 
                <article className='skills__details'><SiSpringboot className='skills__details-icon'/>
                <div>
                <h4>SpringBoot</h4>
                <small className='text-light'>Intermediate</small></div>
                </article> 
              </div>
            </div>
          </div>
          
        </section>
      )
}

export default Skills
