import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Project=()=>{

    const [data,setData]=useState({})

    const [arr,setArr]=useState([])

    const clickHanle=()=>{
        arr.splice(data.index,data.remove,parseInt(data.insert))
        setArr([...arr])
    }
    

    return(
        <>
        {/* <h1>{JSON.stringify(data)}</h1> */}
        <h1>{JSON.stringify(arr)}</h1>
        <Button title={'Generate'} onClick={()=>setArr((prevState)=>([...prevState,Math.floor(Math.random()*10)]))}/>
        <div>
            <Input type={'number'} placeholder={'Enter index number'}
            onChange={(event)=>setData((prevState)=>({...prevState,index:event.target.value}))}
            />

<Input type={'number'} placeholder={'Enter number to delete'}
            onChange={(event)=>setData((prevState)=>({...prevState,remove:event.target.value}))}
            />

<Input type={'number'} placeholder={'Enter index number'}
            onChange={(event)=>setData((prevState)=>({...prevState,insert:event.target.value}))}
            />
            <Button title={'submit'} onClick={clickHanle}/>
        </div>
        </>
    )
}

export default Project;