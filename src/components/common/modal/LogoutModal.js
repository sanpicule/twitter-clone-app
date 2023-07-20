import React from 'react'
import {
  Box,
  Button,
  Modal,
  Stack,
  Typography
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { auth, signOut } from '../../../Firebase'
import styles from './LogoutModal.module.css'

const LogoutModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  const signOutUser = async () => {
    try {
      await signOut(auth);
      navigate('/')
    } catch (error) {
      alert(error.Message)
    }
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
      >
        <Box className={styles.logout_modal}>
          <Stack gap={5}>
            <h2>TwitterCloneからログアウトしますか？</h2>
            <Typography color='gray'>
              いつでもログインし直すことができます。アカウントを切り替える場合は、既存のアカウントを追加すると切り替えることができます。
            </Typography>
            <Stack gap={1}>
              <Button
                variant="contained"
                color="error"
                onClick={signOutUser}
              >
                ログアウト
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                onClick={onClose}
              >
                キャンセル
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  )
}

export default LogoutModal