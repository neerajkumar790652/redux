import React, { useState } from 'react';
import mystore from '../Redux/MyStore';
import {useSelector} from 'react-redux';


const Input = () => {
  const data = useSelector((storedata)=>{
     return storedata;
  })
    const [state,setState]=useState("");
    
        const handleClick=()=>{
          mystore.dispatch({
        type:"name",
        username:state
    });
  }


     
  return (
    <div className='container'>
      <div>
      <h2 style={{color:"green",textAlign:"center"}}>Input Components</h2>
      <input type='text' placeholder='enter your name' style={{margin:"10px 10px 10px 120px"}} onChange={(e)=>{setState(e.target.value)}}/>
      
      <button onClick={handleClick}>Send Data</button>
      </div>
       
      <div>
    <h1 style={{color:"green",textAlign:"center"}}>{data.name}</h1>
      </div>
    </div>
  )
}

export default Input
