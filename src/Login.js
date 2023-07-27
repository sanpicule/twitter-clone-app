import React, { useState } from 'react'
import CodeOffIcon from '@mui/icons-material/CodeOff'
import { useDispatch } from 'react-redux'
import LoadingButton from '@mui/lab/LoadingButton'
import {
  Button,
  Divider,
  TextField,
  Typography
} from '@mui/material'

import styles from './styles/Login.module.css'
import {
  auth,
  provider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from './Firebase'
import {
  sendEmailVerification,
  signInWithPopup
} from 'firebase/auth'
import PasswordResetModal from './PasswordResetModal'
import { updateUserProfile } from './feature/userSlice';

const Login = () => {
  const dispatch = useDispatch()
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [error] = useState(false)
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const signInGoogle = async () => {
    await signInWithPopup(auth, provider)
  }

  const signInEmail = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setIsLoading(false)
    } catch (error) {
      alert(error.message)
      setIsLoading(false)
    }
  }

  const signUpEmail = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const authUser = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(authUser?.user, {
        displayName: userName,
        photoURL: null
      })
      await sendEmailVerification(authUser?.user)
      alert('認証用のメールを送信しました。')
      dispatch(
        updateUserProfile({
          displayName: authUser?.displayName,
          photoURL: null
        })
      )
      setIsLoading(false)
    } catch (error) {
      alert(error.message)
      setIsLoading(false)
    }
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
        <CodeOffIcon className={styles.twitter_icon} />
        <Divider />
        {isLogin
          ? <Typography className={styles.login_title}>ログインして投稿しよう！</Typography>
          : <Typography className={styles.login_title}>登録して投稿しよう</Typography>
        }
        <form
          className={styles.login_form}
          onSubmit={isLogin ? signInEmail : signUpEmail }
        >
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
          <LoadingButton
            type='submit'
            size="small"
            loading={isLoading}
            variant="contained"
          >
            <span>{isLogin ? 'ログイン' : '新規登録'}</span>
          </LoadingButton>
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
          <img width="20" height="20" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo"/>
          <Typography style={{ marginLeft: '10px' }}>Googleでログイン</Typography>
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
