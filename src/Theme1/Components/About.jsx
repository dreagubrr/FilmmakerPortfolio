import React from 'react'
import '../style/about.css'
import about from '../images/about2.jpg'

export default function About() {
  return (
    <section className='about' id='About'>
      <div className='container'>
        <div className='card'>
          <div className='card-body'>

            <div className='img-about'>
              <img loading='lazy' src={about} />
            </div>

            <div className='text-body'>
              <div className='text-1'>
                <h2>Filmmaker | Fotógrafa | Diseñadora</h2>
              </div>
              <div className='text-2'>
                <div className='About-Me'>
                  <h3>Acerca de mí</h3>
                  <p><span className="dropcap">M</span>e llamo Isabel Huerta Fernandez</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
