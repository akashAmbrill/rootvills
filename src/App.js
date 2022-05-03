import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import "./App.css"


const App = ()=>{
  const[input,setInput]=useState('')
  const[check,setCheck]=useState(false)
const[data,setData]=useState([{name:"akasj",id:1},{surName:"patil",id:2},{village:"shindewadi",id:3}])
  console.log(input)
  const handleChange=(e)=>{
    setInput(e.target.value)
    const dat = data.find((item)=>item.id == e.target.value)
    console.log(dat)
  }
  return(
    <div >
     <select value={input} onChange={handleChange}>

       {data.map((item)=>(
         <>
         <option value={item.id}>{item.name}</option>
         <option value={item.id}>{item.surName}</option>
         <option value={item.id}>{item.village}</option>
         </>
       ))}
     </select>

    
    </div>
    
  )
}

export default App