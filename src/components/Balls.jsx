import React, { useState, useReducer } from "react";
import {connect} from "react-redux";

// function reducer(state,action) {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     default:
//       console.log("Wrong type");
//   }
// }

function Balls(props){
    console.log(props)
    // let [balls,setballs]=useState(10);
  // const increment=()=>{
  //     setballs(balls+1)
  // }
  // const decrement=()=>{
  //     setballs(balls-1)
  // }
  //useReducer hook
//   const [balls, dispatch] = useReducer(reducer, 10);
  return (
 
    <>
      <h1>Balls</h1>
      <h2>No of balls {props.balls}</h2>
      <button onClick={props.buyball}>+</button>
      <button onClick={props.sellball}>-</button>
    </>
  );
}

//to get your state variable from store
const mapStateToProps=(store)=>{
    return store;
}
//mapStateToProps m jo return hoga oh asa prop pass hoga
const mapDispatchtoProps=(dispatch)=>{
    return{
        sellball:()=>{dispatch({
            type :"decrement"
        })},
        buyball :()=>{dispatch({
            type : "increment"
        })}
    }
}

//gives access to the components of two things
//first-> store-> mapStateToProps
// second->dispatch->mapDispatchtoProps
export default connect(mapStateToProps,mapDispatchtoProps)(Balls);
