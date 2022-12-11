import React, { useReducer } from "react";
let initialState={
    bat : 11,
    value:""
}

function reducer(state, action) {
  switch (action.type) {
    case "sell":
      if(state.bat - state.value <0){
        return {
          ...state,
          value:""
        }
      }
         return {
        bat: state.bat - state.value,
        value:""
      }
      break;
    case "buy":
        return{
            bat : state.bat + Number(state.value),
            value : ""
        }
    case "sellvalue": 
          return{
            bat : state.bat,
            value :action.payload
          }
    default : console.log("Wrong Type")  
  }
}

function Batusereducer() {
  let [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Bat usereducer</h1>
      <h2>No of Bats :{state.bat}</h2>
      <input type="text"  value={state.value} onChange={(e)=>{
         let value=e.target.value;
         dispatch({type : "sellvalue",
                   payload : value})
      }}/>
      <button
        onClick={() => {
          dispatch({ type: "sell" });
        }}
      >
        Sell
      </button>
      <button
        onClick={() => {
          dispatch({ type: "buy" });
        }}
      >
        Buy
      </button>
    </>
  );
}

export default Batusereducer;
