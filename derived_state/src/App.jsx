import { useState } from 'react'
import Callback from './callback';
import './App.css'


//parent
function App (){
  const[UIcolor,setUIcolor]=useState(null);

  const getcolor = (color)=>{
  setUIcolor(color);
}
  return(
    <>
    
    <div className='card' style={{background:`${UIcolor}`}}>
    </div>
      <Callback getcolor={getcolor}/>
    
    </>
  ) 
}

export default App
