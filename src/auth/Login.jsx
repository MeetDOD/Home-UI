import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import './login.css'
import { Link } from 'react-router-dom';
import { Box, Divider } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Login = () => {
  return (
    <>
    <div className='wrapper'>
        <form action=''>
            <h1>Login</h1>
            <div className='input-box'>
            <i><AccountCircleIcon/></i><input type='text' placeholder='Username' required />
            </div>
            <div className='input-box'>
            <i><LockIcon/></i><input type='password' placeholder='Password' required />
            </div>
            <div className="remember-forgot">
                <label><input type='checkbox' />Remember me</label>
                <a href='#'>Forgot password</a>
            </div>
            <Link><button type="submit" className='login'>Login</button></Link>
            <Divider sx={{ my:2 }}>
              <Box style={{ cursor:"pointer"}}><GoogleIcon/><GitHubIcon sx={{ ml:1 }}/><LinkedInIcon sx={{ ml:1 }}/></Box>
            </Divider>
            <Link to='/register'><button type="submit" className='register'>Register</button></Link>
        </form>
    </div>
     
    </>
  )
}

export default Login
