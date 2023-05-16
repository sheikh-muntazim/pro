import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import svgImage from '../assets/documents/rafiki.svg'
const Header = () => {
  return (
    <Container sx={{}}>
      <Grid container paddingTop={5}  columnSpacing={50}>

       <Grid item md={6}>
       
            <Typography variant='h5' sx={{fontSize:'58px',fontWeight:'700',lineHeight:'64px',fontFamily:'Raleway'}}>
                Get Previous Year Question Paper
            </Typography>
            <Typography variant='body1'  paragraph
            sx={{fontWeight:'400',lineHeight:'32px',fontFamily:'Roboto'}}>
              Sign Up And Get Personalized Paper, Upgrade Yourself Let The Improvement Yourself Keep You Busy That You Have No 
              </Typography>
            <Button variant='contained' >Sing Up Now</Button>
      
       </Grid>

       <Grid item md={6} sx={{ display:'flex',justifyContent:'center'}}>
      
            <img style={{width:'300px'}} src={svgImage}/>
      
       </Grid>
        

       
      </Grid>
    </Container>
  )
}

export default Header