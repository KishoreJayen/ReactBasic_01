import React from 'react'
import { useReducer } from 'react'

function callBack(oldState, dispatchActionTrigger){

    // if(dispatchActionTrigger.action === "change_age"){
    //     return {name:oldState.name, age:dispatchActionTrigger.new_age}
    

    switch (dispatchActionTrigger.action) {
        case "change_age":
            return { ...oldState, age: dispatchActionTrigger.new_age };
        case "change_name":
            return { ...oldState, name: dispatchActionTrigger.new_name };
        // default:
        //     return oldState;
       
    }
}



function UseReducer() {
    let[state, dispatchAction]= useReducer(callBack, {name:"KishoreJayen", age:'22'})
  return (
    <div>UseReducer
<h1>Name:{state.name}</h1>
<h1>Age:{state.age}</h1>
<button onClick={(e)=> {dispatchAction({"action": "change_age", new_age:"24"})}}>Change Age</button>
<button onClick={(e)=>{dispatchAction({"action": "change_name", new_name:"Randy Orton"})}}>Change Name</button>
    </div>

  )
}

export default UseReducer