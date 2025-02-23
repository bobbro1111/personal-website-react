import { useState } from 'react'
import reactLogo from './assets/github-cat-png.png'
import viteLogo from './assets/LinkedIn.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.linkedin.com/in/bobjbrown/" target="_blank">
          <img src={viteLogo} className="logo" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/bobbro1111" target="_blank">
          <img src={reactLogo} className="logo react" alt="GitHub logo" />
        </a>
      </div>
      <h1>Click the Icons!</h1>
      <p>
          full page coming soon!
        </p>
    </>
  )
}

export default App
