import React from 'react';
import './Login.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Password from './component/passwors.js';
import Button from '@mui/material/Button';
import GoogleButton from 'react-google-button';



function Login() {
  return (
    <div>
        <div className="box">
        <div className="mainflex">
            <img src='./Sign up-amico 2.svg' ></img>
            <div className="rightdata">
            <div className="logo"><img src='./logo.svg'></img></div>
            <div className="txt">
            <h3>Welcome.Get started by providing your details.</h3>
            </div>
            <div className="inputs">
                <div className="name">
            <TextField fullWidth  id="demo-helper-text-misaligned" label="Name" sx={{ bgcolor: '#FFFFFF'}}/>
            </div>
            <div className="phn">
            <TextField fullWidth  id="demo-helper-text-misaligned" label="Phone Number" sx={{ bgcolor: '#FFFFFF'}} />
            </div>
            <div className="pass">
            <Password />
            </div>
            <div className="btn">
            <Button fullWidth  sx={{ bgcolor: '#536DFE', height:'50px'}} variant="contained">Signup</Button>
            </div>
            <div className="txtflex">
            <div className="gbtn">
            <GoogleButton onClick={() => { console.log('Google button clicked') }} />
            </div>
            <div className="gtxt">
            Already have an account? <span text-color='1976D2'>Sign In</span>
            </div>
            </div>
            
</div>
            </div>
            
        </div>
        </div>
    </div>
    
    
  )
}


export default Login
