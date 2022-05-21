import React, { useState } from 'react'


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
         <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-trash icondelete" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
        </button>
        </div>
        </div>
    })}</div> : null}
    </div>
    
    </div>
  )
}

export default Todo2