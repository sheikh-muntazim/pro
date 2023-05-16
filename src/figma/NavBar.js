import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import CustomDrawer from "./CustomDrawer";


const NavBar = () => {

  const [open,setOpen]=useState(false)
  const handleDrawerOpen =()=>{
    setOpen(true)
  }
  return (
    <div style={{ background: "#E9EEFF", padding: "0px 0px" }}>
      <Container sx={{ display: "flex", justifyContent: "space-between" ,padding:'12px 0px'}}>
        <Stack direction={"row"} alignItems="center" spacing={2}>
        <Box sx={{display:'flex',alignItems:'center',gap:'12px'}}>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ display:{xs:'block',md:'none'},height:'40px' }}
          >
            <MenuIcon sx={{fontSize:"24px!important"}}/>
          </IconButton>

          <Typography
            variant="h4"
            sx={{ fontWeight: "600", lineHeight: "18px", fontSize: "20px",color:'#698AFF' }}
          >
            Question Drive
          </Typography>
          </Box>
          <FormControl sx={{display:{md:'block',xs:'none'}}} variant="outlined">
            {/* <InputLabel >Search</InputLabel> */}
            <OutlinedInput
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {}}
                    edge="end"
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
              size="small"
              onChange={({ target: { value } }) => console.log(value)}
              // label="Password"
              placeholder="Search"
            />
          </FormControl>
        </Stack>

        <Stack direction={"row"} alignItems="center" spacing={3}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "popins",
              fontSize: "14px",
              lineHeight: "21px",
              letterSpacing: "1%",
              fontWeight: "400",
              color: "#282828",
              display:{md:'block',xs:'none'}
            }}
          >
            Home
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "popins",
              color: "#7E7E7E",
              fontSize: "14px",
              lineHeight: "21px",
              fontWeight: "400",
              display:{md:'block',xs:'none'}
            }}
          >
            SRTM University
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "popins",
              color: "#7E7E7E",
              fontSize: "14px",
              lineHeight: "21px",
              fontWeight: "400",
              display:{md:'block',xs:'none'}
            }}
          >
            Contact Us
          </Typography>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              fontFamily: "roboto",
              fontWeight: "500",
              display:{md:'block',xs:'none'}
            }}
          >
            login
          </Button>
        </Stack>
      </Container>
      <CustomDrawer open={open} setOpen={setOpen}/>
    </div>
  );
};

export default NavBar;
