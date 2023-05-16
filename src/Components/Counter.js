import { Button } from "@mui/material";
import React, { useMemo, useState } from "react";

const Counter=()=>{

    const [counterOne,setCounterOne]=useState(0)

    const [counterTwo,setCounterTwo]=useState(0)


    const increamentOne=()=>{

        setCounterOne(counterOne+1)
    }

    const increamentTwo=()=>{

        setCounterTwo(counterTwo+1)
    }

    const isEven= useMemo(()=>{
        for( let i=0;i<=2000000000;i++){}
        return counterOne%2==0
    },[counterOne])
   


    return(<div>
        <Button onClick={increamentOne}> increase {counterOne}</Button>
        <h1>{isEven?'even':'odd'}</h1>
        <Button onClick={increamentTwo}>decrease {counterTwo}</Button>

    </div>)
}
export default Counter