import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiCall=()=>{

    useEffect(()=>{
        ApiHandler()
    },[])
    const [list,setList]=useState([])
    const ApiHandler=()=>{

        axios.get('https://reqres.in/api/users').then((res)=>{setList(res?.data?.data)}).catch((err)=>{console.log('didnot find data');})
    }

    return(
        <>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        {list.map(({first_name,last_name,avatar})=>{ 
            // const {title}=data;
            return  <Card sx={{ width: 345 ,m:4}}>
            <CardMedia
              component="img"
              height="140"
              image={avatar}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               {first_name} {last_name}
              </Typography>
              
            </CardContent>
           
          </Card>})}
          </div>
        </>
    )
}

export default ApiCall