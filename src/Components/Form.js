import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import './Form.css';

const Form=()=>{

    const [data,setData]=useState({})

const [showData,setShowData]=useState(false)
    // useEffect(()=>{
        
    // },[data])

    // const clickHandler=()=>{
    //     setIsDataVisible(isDataVisible)
    // }

    return (
        <>
        <div>
            <form>
                <fieldset>
                    <legend>Registeration Form</legend>
                <table>
                    <tr>
                        <td><label>First name : </label></td>
                        <td><Input type='text' placeholder='Enter your first name' onChange={(event)=>setData((prevState)=>({...prevState,firstName:event.target.value}))}/> </td>
                    </tr>

                    <tr>
                        <td><label>Last name : </label></td>
                        <td><Input type='text' placeholder='Enter your last name' onChange={(event)=>setData((prevState)=>({...prevState,lastName:event.target.value}))}/></td>
                    </tr>

                    <tr>
                        <td><label>Email : </label></td>
                        <td><Input type='text' placeholder='Enter your email'/></td>
                    </tr>

                    <tr>
                        <td><label>Mobile No : </label></td>
                        <td><Input type='text' placeholder='Enter your mobile no'/></td>
                    </tr>

                    <tr>
                        <td>Address :</td>
                        <td><textarea placeholder="Enter your full address" cols={20}/></td>
                    </tr>

                    <tr>
                        <td><Button title='Submit' onClick={()=>setShowData(!showData)}/></td>
                        <td></td>
                    </tr>
                </table>
               

                </fieldset>
            </form>
        </div>
        <div>{showData===true? <h1>{JSON.stringify(data)}</h1>:null}</div>
        {/* <h1>{JSON.stringify(data)}</h1> */}
        
        </>
    )
}
export default Form;