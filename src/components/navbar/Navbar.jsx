
import React, { useState } from 'react'
import './navbar.css'
import {CgNotes} from 'react-icons/cg'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import { FaBookOpen } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

function Navbar() {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' className={activeNav === '#' ? 'active' : ''} onClick={()=>setActiveNav("#")}><AiOutlineHome/></a>
      <a href='#about' className={activeNav === '#about' ? 'active' : ''}  onClick={()=>setActiveNav("#about")}><AiOutlineUser/></a>    
      <a href='#skills' className={activeNav === '#skills' ? 'active' : ''}  onClick={()=>setActiveNav("#skills")}><CgNotes/></a>
      <a href='#educations' className={activeNav === '#education' ? 'active' : ''}  onClick={()=>setActiveNav("#education")}><FaBookOpen/></a>
      <a href='#projects' className={activeNav === '#projects' ? 'active' : ''} onClick={()=>setActiveNav("#projects")}><FaLaptopCode/></a>
      <a href='#contact' className={activeNav === '#contact' ? 'active' : ''}  onClick={()=>setActiveNav("#contact")}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Navbar