import React, { useState } from 'react'
import {
  Modal,
  TextField,
  Button,
  Stack,
  Typography
} from '@mui/material'

const PasswordResetModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const sendResetEmail = async () => {
    console.log(email)
    // ↓多分こんな感じでできる
    // await auth.sendPasswordResetEmail(email).then(() => {
    //   setModalOpen(false)
    //   setEmail('')
    // }).catch((err) => {
    //   alert(err.message)
    //   setEmail('')
    // })
  }
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
      >
        <div
          style={{
            width: 400,
            height: 100,
            padding: 20,
            backgroundColor: '#fff',
            margin: 'auto',
            marginTop: 200,
            borderRadius: '20px'
          }}
        >
          <Typography>メールアドレスを入力してください</Typography>
          <form
            onSubmit={sendResetEmail}
          >
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='flex-end'
              style={{
                marginTop: '20px'
              }}
            >
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '70%' }}
              />
              <Button
                color="primary"
                type="submit"
                variant="contained"
                style={{ height: '30px' }}
                onClick={sendResetEmail}
              >
                送信
              </Button>
            </Stack>
          </form>

        </div>
      </Modal>
    </div>
  )
}

export default PasswordResetModal
