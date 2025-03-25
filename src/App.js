import './App.css';
import { useState } from 'react';


  



function App() {
  
  const [colour,setColour]=useState("");

  return (
    <div>
      <div className='rectangle'>
        
          <div className={colour==="red"?"onred":"offred"}></div>
          <div className={colour==="yellow"?"onyellow":"offyellow"}></div>
          <div className={colour==="green"?"ongreen":"offgreen"}></div>
          
      </div>
      <button className='redbtn' onClick={()=>setColour("red")}>Red</button>
      <button className='yellowbtn' onClick={()=>setColour("yellow")}>Yellow</button>
      <button className='greenbtn' onClick={()=>setColour("green")}>Green</button>
    </div>
  );
}

export default App;
