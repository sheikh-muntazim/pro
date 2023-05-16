import { Button } from "@mui/material";
import React from "react";

const Mui = () => {
  return (
    <div style={{textAlign:'center'}}>
      <Button variant="text" >Click</Button>
      <Button variant="contained" color="secondary">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
};
export default Mui;
