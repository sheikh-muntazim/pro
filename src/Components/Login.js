import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const LoginForm=()=>{

    const [data,setData]=useState({})

    const handlelick=()=>{
        axios.post('https://reqres.in/api/login',data).then((res)=>{console.log('res : ',res);}).catch((err)=>{console.log('Error in Api',err);})
    }

    

    return(
        <div>
            <form>
                <div style={{textAlign:'center'}}>
                <div><input type={'email'} onChange={(e)=>setData((prev)=>({...prev,email:e.target.value}))}/> <br/>
                <label>Email</label></div>
                
                <div></div>
                <input type={'password'} onChange={(e)=>setData((prev)=>({...prev,password:e.target.value}))} /><br/>
                <label>password</label>

                <div>
                <Button onClick={handlelick}>Login</Button>
                </div>
                </div>
            </form>
        </div>
    )
}
export default LoginForm