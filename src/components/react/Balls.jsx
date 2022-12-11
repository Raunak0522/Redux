import React, { useState, useReducer } from "react";

function reducer(state,action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      console.log("Wrong type");
  }
}

function Balls() {
  // let [balls,setballs]=useState(10);
  // const increment=()=>{
  //     setballs(balls+1)
  // }
  // const decrement=()=>{
  //     setballs(balls-1)
  // }
  //useReducer hook
  const [balls, dispatch] = useReducer(reducer, 10);
  return (
    <>
      <h1>Balls</h1>
      <h2>No of balls {balls}</h2>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
    </>
  );
}

export default Balls;
