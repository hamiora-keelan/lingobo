import { useState, useEffect } from 'react'
import welcomeMessages from '../../models/welcome.ts'
import '../styles/index.scss'

const WelcomeMessages: React.FC = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIndex(
        (prevIndex) => (prevIndex + 1) % welcomeMessages.length,
      )
    }, 4000) // Match this duration with the CSS animation duration

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="verticle-container">
      <div className="typewriter-wrapper">
        {/* <div className="horizontal-container centerline"> */}
        <h1 className="space-titles">Welcome</h1>
        <h1 id="space-titles">|</h1>
        {/* </div> */}

        <span key={currentMessageIndex} className="typewriter">
          {welcomeMessages[currentMessageIndex].message}
        </span>
      </div>
      <h3 id="subtitle">
        Learn {welcomeMessages[currentMessageIndex].language}
      </h3>
    </div>
  )
}

export default WelcomeMessages
