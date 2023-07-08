import React from 'react'
import {
  Button,
  Modal,
  Stack,
  Typography
} from '@mui/material'
import { auth } from '../../Firebase'

const LogoutModal = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
      >
        <div
          style={{
            width: 350,
            height: 100,
            padding: 20,
            backgroundColor: '#fff',
            margin: 'auto',
            marginTop: 200,
            borderRadius: '20px'
          }}
        >
          <Stack gap={5}>
            <Typography>本当にログアウトしますか？</Typography>
            <Button
              variant="outlined"
              color="error"
              onClick={
                async () => {
                  await auth.signOut()
                }
              }
            >ログアウト</Button>
          </Stack>
        </div>
      </Modal>
    </div>
  )
}

export default LogoutModal