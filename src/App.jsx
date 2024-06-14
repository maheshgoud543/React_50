import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <div >
        <p>Counter:{count}</p>
        <div className='buttons'>
          <button onClick={() => setCount(count + 1)}>
            increment
          </button>
          <button onClick={() => {
            if (count == 0) {
              return count
            } else {
              setCount(count - 1)
            }
          }}>Decrement</button>
        </div>
      </div>
    </div>
  )
}

export default App
