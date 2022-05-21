import React, { useState } from 'react'
import {RiDeleteBin5Line} from "react-icons/Ri"

const Todo2 = ({list2,setList1,list1,setList2}) => {
    const [state,setState]=useState(true)
  return (
    <div className='subcontainer2'>
      <div>
      <button  className='showright' onClick={()=>{
        setState(!state)
       }}><h1>{state==true ? "Hide Completed":"Show Completed"}</h1>
    </button>
    </div>
    <div className='rightlist'>
    {state==true ? <div>{list2.map(e=>{
        return <div className='eachitem'>
          <div className='radio'>
          <button onClick={()=>{
          e.state=(!e.state)
          var a=list1.filter(e=>{
                return e.state==true
            })
          setList2(a) 

        }} className='radio2'></button>
        </div>
       <div className='content1'>{e.value}</div>
        <div className='delete'><button onClick={()=>{
          {var k=list1.filter(todo=>{
            return todo.id!=e.id
          })
        
          var b=k.filter(todo=>{
            return todo.state==true;
          })
        }

          setList1(k)
          setList2(b)
        }} className='deletebutton'>
          <RiDeleteBin5Line size="30px" className='icondelete'/>
        </button>
        </div>
        </div>
    })}</div> : null}
    </div>
    
    </div>
  )
}

export default Todo2