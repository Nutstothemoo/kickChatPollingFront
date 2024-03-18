import { useState } from 'react'
import './App.css'
import PollingForm from './PollingForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Sondage du Fueg</h1>
      <div className="card">
      <PollingForm/>
      </div>
    </>
  )
}

export default App
