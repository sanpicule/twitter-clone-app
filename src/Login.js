import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Button, Divider, Typography } from '@mui/material'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login' style={{ width: '100%', height: '100%', maxWidth: 'none' }}>
      <div className='login_container'>
        <TwitterIcon className='twitter_icon' />
        <Divider />
        <Typography className='login_title'>ログインしてツイートをしよう！</Typography>
        <form className='login_form'>
          <input type='email' className='input'></input>
          <input type='password' className='input'></input>
          <button type='submit' className='button'>ログイン</button>
        </form>
        <Divider />
        <Button
          className='login_button'
          LinkComponent={Link}
          to={'/home'}
        >Googleでログイン</Button>
      </div>
    </div>
  )
}

export default Login
