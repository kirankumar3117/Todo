import React, { useState } from 'react'
import Todo1list from './Todo1list'
import {v4 as uuidv4} from "uuid"

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
        }} className="showinput">{addshow ===true ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-caret-down-fill yorrow" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
      </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-caret-up-fill yorrow" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>}</button>
        </div>

        





          <div className={addshow===true ? 'leftlist':null}>{addshow ===true ? <Todo1list>
         {list1.map(e=>{
             return <div className='eachitem'>
               <div className='radio'>
                 <button onClick={()=>handleDelete(e,e.id)}  className={e.state===false ? 'radio1':'radio2'}></button>
                 </div>
                 <div className={e.state==false?'content':'content1'}>{e.value}</div>
                <div  className='delete'><button onClick={()=>handleremove(e.id)}  className='deletebutton'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-trash icondelete" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
                  </button></div>
                 </div>
         })}
        </Todo1list> : null}</div>
      

    </div>
  )
}

export default Todo1