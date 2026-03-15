

import '../style/Contact.css'
import { motion } from 'framer-motion'

import emailjs from '@emailjs/browser';
import React, { useState } from "react";
import { useEffect } from 'react';
export default function Contact() {

  const [fullName, setFullName] = useState('')
  const [email, setNEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [error, setError] = useState(false)
  const [isMsgSent, setIsMsgSent] = useState(false)


//   useEffect(()=>{

//     if(isMsgSent){
       
//         setInterval(setIsMsgSent(false),6000);
//      }else{
//          console.log('ismg not true')
//      }
        


// },[isMsgSent])


  //validation form
  const handleSubmit = (e) => {

    e.preventDefault();
    if (fullName.length == 0 || email.length == 0 || msg.length == 0) {
      setError(true)
     
    }
    else {
      emailjs.sendForm('service_kpa0266', 'template_8l6dwld', e.target, 'B-K9drG3fFKCAdNB5')
        .then((result) => {
          console.log(result.text),
          setIsMsgSent(true)

          
        }, (error) => {
          console.log(error.text);
        });
      e.target.reset()
      setError(false)

      setFullName("")
      setNEmail("")

      setMsg("")


    }


  }

  // set data from form 
  const handelName = (e) => {
    setFullName(e.target.value)

  }

  const handelEmail = (e) => {
    setNEmail(e.target.value)

  }
  const handelMsg = (e) => {
    setMsg(e.target.value)

  }
  return (

    <section className='instagram' id='Contact'>
<div className='card'>
<div className='card-body'>
 <div className='contact'>
      <div className='contact-col1'>
      
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, scale: 0.5 }}

          className='contact-subcol1'>
          <div className='text1'>
            <h1>Trabajemos juntos</h1>
            <p>Siempre estoy abierta a colaborar en un proyecto o conocer nuevas oportunidades</p>
          </div>
          <div className='text2'>
            <div className='text2-1'> <p>¿Tienes un proyecto en mente? Hablemos!</p> <p>Agenda una llamada conmigo</p></div>

            <div className='text2-2'> <p>No dudes en escribirme</p> <p>itsxsacold@gmail.com</p></div>
          </div>
          <div className='icons-contact'>
        
            <a className='social-links-contact' target='_blank' href='https://www.instagram.com/itsxsa_cold/'><i class="fa-brands fa-linkedin"> </i></a>
            <a className='social-links-contact' target='_blank' href='https://www.instagram.com/itsxsa_cold/'><i class="fa-brands fa-square-instagram"> </i></a>
            <a className='social-links-contact' target='_blank' href='https://www.instagram.com/itsxsa_cold/'><i class="fa-brands fa-youtube"> </i></a>
          

          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className='contact-subcol2'>
          <form className='form' onSubmit={handleSubmit}>
          {isMsgSent?<div className='msgSent animate__animated animate__shakeX'> <h3>Done! We will contact you as soon as possible.</h3></div>:null}
            <>
              <input name='name' type='text' placeholder='Nombre y apellido' onChange={handelName}></input>
              {error && fullName.length <= 0 ?
                <label className='errorMSG animate__animated animate__shakeX'>Este campo es obligatorio.</label> : ""}
            </>
            <>
              <input name='Email' type='email' placeholder='Correo Electrónico' onChange={handelEmail}></input>
              {error && email.length <= 0 ?
                <label className='errorMSG animate__animated animate__shakeX'>Este campo es obligatorio.</label> : ""}
            </>
            <>
              <textarea name='message' placeholder='Escribe tu mensaje' onChange={handelMsg}></textarea>
              {error && msg.length <= 8 ?
                <label className='errorMSG animate__animated animate__shakeX'>Este campo es obligatorio y no puede contener menos de 8 carácteres.</label> : ""}
            </>
            <input className='submit-btn' type='submit'></input>
          </form>

        </motion.div>
      </div>

    </div>

</div>
</div>

    </section>

   
  )
}
