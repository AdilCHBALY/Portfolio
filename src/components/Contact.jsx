import React, { useRef, useState } from 'react'
import Earth from '../canvas/Earth'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox'
import { OrbitControls, Stage } from '@react-three/drei'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber'
const Contact = () => {
  const form = useRef()
  const [success,setSuccess] = useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault()

    emailjs.sendForm('service_333wkug', 'template_3la09gn', form.current, '7LXOsgGV9WJvpr8LS')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
      });
  }
  return (
    <section className='Contact' id='Contact'>
      <div className="Content">
        <div className="left">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="form__title">
              Contact Me
            </div>
            <input type="text" placeholder='Name' name='name' required/>
            <input type="text" placeholder='Email' name='Email'required/>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Write Something' required/>
            {success && "Your message has been sent! , We'll get back to you soon :)"}
            <button><ForwardToInboxIcon /></button>
          </form>
        </div>
        <div className="right">
          <div className="earth">
            <Canvas>
              <Stage environment="city" intensity={0.6}>
                <Earth/>
              </Stage>
              <OrbitControls enableZoom={false} autoRotate={true} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
