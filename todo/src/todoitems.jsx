import React from "react";
import './todo.css'

const Todoitem =({data})=>{
  return(
    <>
    <div className="to">
    <h1>{data.title}</h1>
    </div>

    </>
  )
}
export default Todoitem