import React from 'react'
import '../style/instagram.css'
import img1 from '../images/ig/i1.jpg'
import img2 from '../images/ig/i2.jpg'
import img3 from '../images/ig/i3.jpg'
import img4 from '../images/ig/i4.jpg'

export default function Instgram() {


  return (
    <section className='instagram' >
<div className='card'>
<div className='card-body'>

<div> <h3>Sígueme en Instagram</h3> </div>
<div className='img-ig'> 

<img loading='lazy' src={img1}></img>
<img loading='lazy' src={img2}></img>
<img loading='lazy' src={img3}></img>
<img loading='lazy' src={img4}></img>

</div>
<a href='https://www.instagram.com/itsxsa_cold/' target="_blank" rel="noopener noreferrer" className='btn-ig'><i class="fa-brands fa-instagram"></i>Seguir</a>
</div>
</div>

    </section>
  )
}
