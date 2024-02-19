import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add one!</button>
    </main>
  )
}

export default App
