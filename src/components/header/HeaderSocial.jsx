
import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/vinaykumar0517/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/vinaykumar0410/" target='_blank'><FaGithub/></a>
        <a href="https://leetcode.com/vinay_0517/" target='_blank'><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocial