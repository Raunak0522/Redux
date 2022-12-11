import React ,{useState}from 'react'

function Bat() {
    let [bat,setBat]=useState(10);
    let [tosell,SetTochangebat]=useState("");
    const sell=()=>{
        setBat(bat-tosell);
        SetTochangebat("");
    }
    const buy=(e)=>{
        
        setBat(+bat + +tosell);
        SetTochangebat("");
    }
  return (
    <>
    <h1>Bat</h1>
    <h2>No of Bats :{bat}</h2>
    <input type="text" value={tosell} onChange={(e)=>{
        let value=e.target.value;
        SetTochangebat(value);
    }}/>
    <button onClick={sell}>Sell</button>
    <button onClick={buy}>Buy</button>
    </>
  )
}

export default Bat