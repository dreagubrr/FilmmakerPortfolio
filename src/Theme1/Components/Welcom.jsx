import React from 'react'
import { Link } from 'react-router-dom'
import '../style/welcom.css'

export default function Welcom() {

  <h3 className='animate__animated animate__zoomIn'>Isabel Huerta</h3>

  // <button className='Photos' ><a href='#Photos'>Photography</a></button>
  // <button className='Videos'><a  href='#Videos'>Filmmaking</a></button>

  // </div>
  return (
  <section className='seactin-welcom' id='Home'>  
    <div className='handwrite'>
      <p className='animate__animated animate__zoomIn'>Isabel Huerta</p>
    </div>
    <div className="btn-welecom">
      <Link to='/Videos'>Videos</Link>
      <Link to='/Photos'>Fotos</Link>
    </div>
  </section>
)
}
