import React, { useState } from 'react'

function Usestate() {

    const [count, setCount]= useState(100)

    
const increment=()=>{
    setCount((counting)=>
        count+10
    )
}

const decrement=()=>{
    setCount((counting)=>
        count-20
    )
}


  return (
   <>
   <h1>{`Count the Value  ${count}`}</h1>
   <button onClick={increment}>+</button>
   <button onClick={decrement}>-</button>
   </>
  )
}

export default Usestate
