import { Button, Card } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useId, useState } from "react";

const FirstCall=()=>{

    const [mydata,setMyData]=useState([])
    // useEffect(()=>{
    //     getData()
    // },[])

    const getData= async ()=>{

        // fetch("https://reqres.in/api/users").then((data)=>data.json())
        // .then((data)=>{console.log(data);}).catch(()=>console.log('did not get any data'))
    

        
        // var data= await fetch("https://reqres.in/api/users")
        // //  data=await data.json();
        // //  console.log(data);

        // .then((data)=>data.json()).then((data)=>console.log(data)).catch((err)=>console.log('there is any error',err))
        // console.log('after awaits');

        

       await axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((data)=>setMyData(data.data))
        .catch((err)=>console.log('error while fetching data',err))
    }
    return(<>
    <h1 style={{textAlign:'center'}}>Api call</h1>
    <Container sx={{display:'flex',flexWrap:'wrap'}}>
    {mydata.map((val)=>{
        const {id,title,body}=val;
        return <Card sx={{width:'250px' ,margin:5}}> <div key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        </Card>
    })}
    </Container>
    <div style={{textAlign:'center'}}>    <Button variant="contained"  onClick={getData}>Click</Button>
</div>
    </>)
}

export default FirstCall