import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
 const[ison,setIson]=useState(false)

 const handleClick =()=>{
  setIson(!ison);
 }
 const chackison = ison ? 'ON':'OFF'

  return (
    <>
     <h1 className='text-4xl  text-blue-500'>Hello to Toggle Button project!!!</h1>
     <div className='toggle-switch ' onClick={handleClick} style={{backgroundColor :ison ? "#e515a0" : "#198ed6 "}}>
      <div className={`switch ${chackison}`}>
        <span className='switch-state'>{chackison}</span>
      </div>
     </div>
    </>
  )
}

export default App
