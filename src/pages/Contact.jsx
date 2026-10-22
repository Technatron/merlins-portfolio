import {Suspense, useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import Fox from "../models/Fox"
import Loader from '../components/Loader';

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [currentAnimation, setCurrentAnimation] = useState("idle")
  const [loading, setloading] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const {value, name} = e.target;
    setFormData( prev => ({
      ...prev,
      [name]: value
    }))
  }

  //mapping user interactions to a model action
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle")

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    setFormData({
        name: "",
        email: "",
        message: ""
      })
    setCurrentAnimation("hit");
    // emailjs.send(
    //   import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    //   import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    //   {
    //     from_name: formData.name,
    //     to_name: "Merlin",
    //     from_email: formData.email,
    //     message: formData.message
    //   }, 
    //   import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    // ).then(() => {
    //   setloading(false);
    //   alert('Message sent successfully!');
    //   formRef.current.reset();
    // }, (error) => {
    //   setloading(false);
    //   setCurrentAnimation("idle")
    //   console.error('FAILED...', error.text);
    // })
    setTimeout(() => {
      setCurrentAnimation("idle");
      
    }, 5000);
  }

  return (
    <section className='max-container relative flex lg:flex-row flex-col'>
      <div className='flex-1 flex flex-col min-w-[50%] h-full '>
        <h1 className='head-text'>Get in touch</h1>

        <form className='w-full gap-7 mt-14 flex flex-col'
        onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold' >
            Name
            <input type="text"
            className='input w-full p-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter your name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold' >
            Email
            <input type="email"
            className='input w-full p-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter your email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            How can I help you
            <textarea
            className='textarea w-full p-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Leave a message!'
            rows={4}
            name='message'
            value={formData.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <button 
          type='submit' 
          className='btn'
          onFocus={handleFocus}
          onBlur={handleBlur}          
          >
            {loading ? 'Sending...' : 'Send'}
          </button>

        </form>
      </div>

      {/* Displaying the model here */}
      <div className="lg:w-1/2 w-full, lg:h-auto md:h-[550px] h-[350px]">

      <Canvas
        camera={{
          position: [0,0,5]
        }}
      >
        <Suspense fallback={<Loader/>}>
        <ambientLight intensity={2}/>
        <directionalLight intensity={4} />
          <Fox
            position={[0.5, 0.35,0]}
            scale={[0.5, 0.5, 0.5]}
            rotation={[12,5,6]}
            currentAnimation={currentAnimation}
          />
        </Suspense>
        
      </Canvas>
      </div>
    </section>
  )
}

export default Contact