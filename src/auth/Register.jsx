import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import './login.css'
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import { Box, Divider } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const Login = () => {
  return (
    <>
    <div className='wrapper'>
        <form action=''>
            <h1>Register</h1>
            <div className='input-box'>
            <i><AccountCircleIcon/></i><input  type='text' placeholder='Username' required />
            </div>
            <div className='input-box'>
            <i><EmailIcon/></i><input  type='email' placeholder='Email' required />
            </div>
            <div className='input-box'>
            <i><LockIcon/></i><input type='password' placeholder='Password' required />
            </div>
            <div className="remember-forgot">
                <label><input type='checkbox' /> accept Terms & Conditions</label>
            </div>
            <Link><button className='login'>Register</button></Link>
            <Divider sx={{"&::before, &::after": {borderColor: "secondary.light",mt:2},}}>
              <Box style={{ cursor:"pointer"}} sx={{ mt:2 }}><GoogleIcon/><GitHubIcon sx={{ ml:1 }}/><LinkedInIcon sx={{ ml:1 }}/></Box>
            </Divider>            
            <Link to='/login'><button type="submit" className='register'>Login</button></Link>
        </form>
    </div>
     
    </>
  )
}

export default Login
