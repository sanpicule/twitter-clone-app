import React, { useState } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import {
  Button,
  Divider,
  TextField,
  Typography
} from '@mui/material'

import styles from './styles/Login.module.css'
import { auth, provider } from './Firebase'
import { signInWithPopup } from 'firebase/auth'
import PasswordResetModal from './PasswordResetModal'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [error, setError] = useState(false)
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const signInGoogle = async () => {
    await signInWithPopup(auth, provider)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div
      className={styles.login}
      style={{
        width: '100%',
        height: '100%',
        maxWidth: 'none'
      }}
    >
      <div className={styles.login_container}>
        <TwitterIcon className={styles.twitter_icon} />
        <Divider />
        {isLogin
          ? <Typography className={styles.login_title}>ログインしてツイートをしよう！</Typography>
          : <Typography className={styles.login_title}>登録してツイートしよう</Typography>
        }
        <form className={styles.login_form} onSubmit={handleSubmit}>
          {!isLogin &&
            <TextField
              required
              label='username'
              value={userName}
              type='text'
              onChange={(e) => setUserName(e.target.value)}
              helperText={error ? 'このフィールドは必須です' : ''}
            />
          }
          <TextField
            required
            label='email'
            value={email}
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            helperText={error ? 'このフィールドは必須です' : ''}
          />
          <TextField
            required
            label='password'
            value={password}
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            helperText={error ? 'このフィールドは必須です' : ''}
          />
          <button
            type='submit'
            className={styles.login_button}
          >
            {isLogin ? 'ログイン' : '新規登録'}
          </button>
        </form>
        <Button onClick={() => setModalOpen(true)}>
          パスワードを忘れた方
        </Button>
        <Button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? '新規登録してツイート' : 'ログイン画面へ'}
        </Button>
        <Divider />
        <Button
          className={styles.login_google_button}
          onClick={signInGoogle}
        >
          Googleでログイン
        </Button>
      </div>
      <PasswordResetModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  )
}

export default Login
