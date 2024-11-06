
import React from 'react'
import Resume from '../../assets/Vinay_Kumar.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA