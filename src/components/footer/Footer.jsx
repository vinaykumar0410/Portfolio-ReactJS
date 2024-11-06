import React from 'react'
import "./footer.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>VINAY</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#educations">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/vinaykumar0517/" target='_blank'><FaLinkedin/></a>
        <a href="https://github.com/vinaykumar0410/" target='_blank'><FaGithub/></a>
        <a href="https://leetcode.com/vinay_0517/" target='_blank'><SiLeetcode/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Vinay Kumar. All rights reserved .</small>
      </div>
    </footer>
  )
}

export default Footer