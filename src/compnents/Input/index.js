import React,{useState} from 'react'
import {db} from "../../firebase"
import { collection,addDoc } from 'firebase/firestore'
import "./index.css"
 
 const Input = () => {
  
  const [values,setVaule]=useState('')
  const inputHandle=(e)=>{
    setVaule(e.target.value)
  }
  const submitHandler=async(e)=>{
    e.preventDefault()
    if(values!==''){
      await addDoc(collection(db,"veda"),{
        values 
      })
    }
     
setVaule('')  
  }
  return (
    <div>
      <center> 
       <form onSubmit={submitHandler} className="form">
        <input type="text" onChange={inputHandle} value={values}/>
        <button type='submit' className='btn'  >Add</button>
        </form> 

      </center>
    </div>
  )
}

export default Input