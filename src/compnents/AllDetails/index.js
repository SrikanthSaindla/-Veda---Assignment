import "./index.css"
import {
collection,
  query,
  onSnapshot,
  doc,
deleteDoc,

} from "firebase/firestore"
import {db} from "../../firebase"
import ClearIcon from '@mui/icons-material/Clear';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { Bars } from  'react-loader-spinner'
import "./index.css"
 


import React, { useEffect, useState } from 'react'

const AllDetails = () => {
const[list,setList]=useState([].sort())
// const[spinner,setSpinner]=useState(true)
 
useEffect(()=>{
    const q=query(collection(db,"veda"));
    const unsub=onSnapshot(q,(querySnapshot)=>{
        let ListArray=[]
         
        querySnapshot.forEach((doc)=>{
             ListArray.push({...doc.data(),id:doc.id})
        })
         
        setList(ListArray)
    })
    return ()=>unsub();
},[])
const DeleteHandler= async (id) => {
    await deleteDoc(doc(db, "veda", id));
  };
  return ( 
    
  
     <div className="main"> 
        <center>
 <div className="list_conatiner">
      {list.map((each)=>
    <ul> 
    <li key={each.id}>{each.values}</li>
    <div className="up"> 
    <ArrowDropUpIcon style={{"color":"#5d42f5"}}/>
    <ArrowDropDownIcon style={{"color":"#5d42f5"}}/>
    </div>
    <button type="button" onClick={()=>DeleteHandler(each.id)}><ClearIcon/></button>
    </ul>
    )} </div>
     
     
   
    </center>
     
    </div>
  )
}

export default AllDetails