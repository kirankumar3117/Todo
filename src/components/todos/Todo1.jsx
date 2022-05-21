import React, { useState } from 'react'
import Todo1list from './Todo1list'
import {v4 as uuidv4} from "uuid"
import {MdArrowDropDown,MdArrowDropUp} from "react-icons/Md"
import {RiDeleteBin5Line} from "react-icons/Ri"

const Todo1 = ({setList1,list1,handleDelete,handleremove}) => {
    const [input,setInput]=useState("")
    const handleChange=(e)=>{
        
       setInput(e.target.value)
      
    }
    const [addshow,setAddshow]=useState(true)
 
  
  return (
    <div className='subcontainer1'>
        <div className='inputsection'><input type="text" placeholder='Write Something...' value={input} onChange={handleChange} className="input"/><button onClick={()=>{
          if(input.length>0){
            const payload={
                id:uuidv4(),
                state:false,
                value:input,
            }
            list1=[payload,...list1]
           setList1([...list1])
           setInput("")
          }
          else{
            alert("Write Something...")
          }
          
        }} className="addinput">+</button><button onClick={()=>{
          setAddshow(!addshow)
        }} className="showinput">{addshow ===true ? <MdArrowDropDown size="30" className='yorrow'/>:<MdArrowDropUp size="30" className='yorrow'/>}</button>
        </div>

        





          <div className={addshow===true ? 'leftlist':null}>{addshow ===true ? <Todo1list>
         {list1.map(e=>{
             return <div className='eachitem'>
               <div className='radio'>
                 <button onClick={()=>handleDelete(e,e.id)}  className={e.state===false ? 'radio1':'radio2'}></button>
                 </div>
                 <div className={e.state==false?'content':'content1'}>{e.value}</div>
                <div  className='delete'><button onClick={()=>handleremove(e.id)}  className='deletebutton'>
                  <RiDeleteBin5Line size="30px" className='icondelete'/>
                  </button></div>
                 </div>
         })}
        </Todo1list> : null}</div>
      

    </div>
  )
}

export default Todo1