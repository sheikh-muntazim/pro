import React, { useState } from "react";
import Button from "./Button";

const Arr=()=>{
    const [arr,setArr]=useState([])

    const remove=()=>{
        arr.pop()
        setArr(()=>[...arr])
    }

    const spcHandle=()=>{
        
    }

    return(
        <div>
            <h1>{JSON.stringify(arr)}</h1>
           <Button title={'Add'} onClick={()=>setArr((prevState)=>([...prevState,Math.floor(Math.random()*10)]))}/>

           <br/>
           <Button title={'remove'} onClick={remove}/>
           <br/>
           <br/>
           <br/>
           <Button title={'Splice'} onClick={spcHandle}/>
            
        </div>
    )
}

export default Arr