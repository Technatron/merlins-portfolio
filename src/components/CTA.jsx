import React from 'react'
import { Link } from 'react-router'

function CTA() {
  return (
    <section className='cta '>
        <p className='cta-text'>Have a project in mind?
            <br className='sm:block hidden' style={{width:"1rem"}} />
        </p>
        <Link to={"/contact"} className='btn'>Contact</Link>
    </section>
  )
}

export default CTA