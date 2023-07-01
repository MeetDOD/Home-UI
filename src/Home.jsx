import { Button, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <h1 class="text-center">WELCOME ! StudyMonk </h1>
      <h2 class="text-center">Assignment 2 : Design User Login and Register Pages</h2>
      <div class="text-center pt-3">
        <Link to='/login' ><Button variant='contained' color='info' sx={{width:'110px',mx:5}}>Login</Button></Link>
        <Link class="center" to='/register'><Button variant='contained' color='success'>Register</Button></Link>
      </div>
    </div>
  )
}

export default Home
