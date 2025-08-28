import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = userState(0);
  return(
    <>
      <h1>
      Multiple component in React
      </h1>

      <button onClick={()=>setCount(count+1)}>count</button>
      {
        count==0?<h1>Condition1</h1>: null
    }


    </>
  )
}

export default App
