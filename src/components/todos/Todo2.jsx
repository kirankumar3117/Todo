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
    <a href="https://github.com/kirankumar3117/todo"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></a>
    </div>
  )
}

export default Todo2