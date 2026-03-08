import React from 'react'
import '../style/about.css'
import about from '../images/about2.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll';
export default function About() {


//   <div className='Equipment'>

//   <h3>My Equipment</h3>
//   <ul>
//   <li>canon 250D 4k</li>
//   <li>canon 550D</li>
//   <li>tokina 11-16mm f2.8</li>
//   <li>camon 50m f1.4</li>
//   <li>canon 18-55×2</li>
//   <li>jmary professional tripod</li>


// </ul>

//   </div>
  return (

    <section className='about' id='About'>
    <div className='container '>
    <div className='card'>
    <div className='card-body'>

<div className='img-about'>     <AnimationOnScroll duration={1.2} animateIn="animate__bounceInLeft">   <img loading='lazy' src={about}></img></AnimationOnScroll></div>

    <diV className='text-body'>
    <AnimationOnScroll duration={1.2} animateIn="animate__bounceInRight">
    <div className='text-1'>

    <h2>Filmmaker | Fotógrafa | Diseñadora</h2>

    

    </div>
    </AnimationOnScroll>
    <AnimationOnScroll duration={1.2} animateIn="animate__bounceInRight">
    <div className='text-2'>
    <div className='About-Me'>
 
    <h3>Acerca de mí</h3>


    <p><span class="dropcap">M</span>e llamo Isabel Huerta Fernandez</p>

    </div>
   

    </div>
    </AnimationOnScroll>
    </diV>
    </div>
    </div>
    </div>
    </section>

  )
}
