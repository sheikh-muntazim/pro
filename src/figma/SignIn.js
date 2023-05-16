import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Container maxWidth sx={{ display: "flex", alignItems: "center",width:'100%', height: "100vh" ,paddingLeft:"0px!important",paddingRight:"0px!important"}}>
      <Grid  container columnSpacing={2}>
        <Grid sx={{ height:"100vh",display:'flex',alignItems:'center'}} item md={6} >
          <Box sx={{ padding: " 0px 20%", color: "#666666", }}>
            <Typography variant="h4" sx={{ color: "#474747",fontSize:'28px',fontWeight:'500',lineHeight:'32.81px',letterSpacing:'1%' }}>
              Welcome back
            </Typography>
            <Typography variant="body2">
              Wellcome back! please enter your details
            </Typography>
            <TextField
              size="small"
              fullWidth
              label={"user name"}
              sx={{ margin: "15px 0px" }}
            />
            {/* <TextField size='small' fullWidth label={'Enter Password'}  />  */}

            <FormControl size={"small"} fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Checkbox checked={true} />
                <Typography variant="body1">Remember Password</Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ color: "#A1B6FF", margin: "15px 0px" }}
              >
                Forget Password
              </Typography>
            </Box>
            <Button
              fullWidth
              variant="contained"
              sx={{ mb: "15px", textTransform: "none" }}
            >
              Sign In
            </Button>

            <Grid
              container
              spacing={1}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid item md={5.5}>
                <hr/>
              </Grid>
              <Grid item md={1}>
                OR
              </Grid>
              <Grid item md={5.5}>
                <hr />
              </Grid>
            </Grid>

            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderColor: "#EBEBEB",
                color: "#666666",
                margin: "15px 0px",
                textTransform: "none",
              }}
            >
              <img
                style={{ height: "16px", marginRight: "12px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />{" "}
              Sign In with google
            </Button>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderColor: "#EBEBEB",
                color: "#666666",
                textTransform: "none",
              }}
            >
              {" "}
              <img
                style={{ height: "16px", marginRight: "12px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png?20200820101156"
              />{" "}
              Sign In with Facebook
            </Button>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderColor: "#EBEBEB",
                color: "#666666",
                margin: "15px 0px",
                textTransform: "none",
              }}
            >
              {" "}
              <img
                style={{ height: "16px", marginRight: "12px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/732px-Apple_logo_black.svg.png?20220821121934"
              />{" "}
              Sign In with Apple ID
            </Button>
            <Typography variant="body2">
              Dont you have an account?{" "}
              <span style={{ color: "#A1B6FF" }}>Sign-Up</span>{" "}
            </Typography>
          </Box>
        </Grid>

        <Grid sx={{
              height: "100vh",
              background: "#EBEFFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }} item md={6}>

            <img
              style={{ width: "60%" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/768px-Udemy_logo.svg.png?20210716114915"
            />
        </Grid>
      </Grid>
    </Container>
  );
};
export default SignIn;
