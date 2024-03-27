import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Features from './components/Features'
import FAQs from './components/FAQs'
import Newsletter from './components/Newsletter'

function App() {
  const [count, setCount] = useState(0)
  const question = 'lorem ipidskjkaclakj lol '
  const answer = 'lorem ipidskjkaclakj lol '
  return (
    <>
      <Hero/>  
      <Marquee/>
      <Features/>
      <FAQs answer={answer} question={question}/>
      <Newsletter/>
    </>
  )
}

export default App
