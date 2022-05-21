import React, { useState } from 'react'
import Todo1 from './Todo1'
import Todo2 from './Todo2'
import "./todo.css"

const Todo = () => {
    const [list1,setList1]= useState([])
    const [list2,setList2]= useState([])

    //check box 
    const handleDelete=(element,id)=>{
     element.state=(!element.state)
      var a=list1.filter(e=>{
         return e.state==true
       })
      setList2(a)    
    }

  const handleremove=(id)=>{
     var k=list1.filter(e=>{
         return e.id!=id;
     })
     var b=k.filter(e=>{
        return e.state==true
      })

      setList2(b)
      setList1(k)

  }


   
    
  return (
    <div className='maincontainer'>
        <Todo1 setList1={setList1} setList2={setList2} list1={list1} handleDelete={handleDelete} handleremove={handleremove}/>
        <Todo2 setList2={setList2} list2={list2} list1={list1} setList1={setList1}/>
    </div>
  )
}

export default Todo