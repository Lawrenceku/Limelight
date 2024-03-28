import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Features from './components/Features'
import FAQs from './components/FAQs'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Hero/>  
      <Marquee/>
      <Features/>
      <FAQs />
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
