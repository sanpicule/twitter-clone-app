import React, { useState } from 'react'
import {
  Box,
  Button,
  Divider,
  Modal,
  Stack,
  TextField
} from '@mui/material'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { selectUser, updateUserProfile } from '../../../feature/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Avatar } from '@mui/material'
import { auth, storage, updateProfile } from '../../../Firebase'
import styles from './ChangeIconModal.module.css'

const ChangeIconModal = ({ isOpen, onClose }) => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const [changeIconInfo, setChangeIconInfo] = useState('')
  const selectChangeIcon = (e) => {
    setChangeIconInfo(e.target.files[0])
  }
  const handleChangeIcon = async () => {
    
    let url = ""
    if (changeIconInfo) {
      const S =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const N = 16;
        const randomChar = Array.from(crypto.getRandomValues(new Uint32Array(N)))
        .map((n) => S[n % S.length])
        .join("");
        const fileName = randomChar + "_" + changeIconInfo.name
        
      await uploadBytes(ref(storage, `avatars/${fileName}`), changeIconInfo)
      url = await getDownloadURL(ref(storage, `avatars/${fileName}`))

      await updateProfile(auth.currentUser, {
          displayName: auth.currentUser.displayName,
          photoURL: url,
      })
      dispatch(
        updateUserProfile({
          displayName: auth.currentUser.displayName,
          photoUrl: url,
        })
      );
    }
  }

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
      >
        <Box textAlign='center' className={styles.icon_change_modal}>
          <Stack gap={3}>
            <h2>アイコン画像編集・登録</h2>
            <Divider />
            <TextField
              type='file'
              onChange={selectChangeIcon}
            >
              画像を変更する
            </TextField>
            <Box>
              {user.photoURL
                ? 
                <Box>
                  <img src={user.photoURL} className={styles.modalImage} />
                </Box>
                :
                <Box textAlign='center'>
                  <Avatar
                    style={{
                      borderRadius: '0px',
                      margin: '20px auto'
                    }}
                    fontSize='large'
                  /> 
                </Box> 
              }
            </Box>
            <Stack gap={2}>
              <Button
                variant="contained"
                onClick={handleChangeIcon}
                style={{
                  borderRadius: '30px',
                  fontWeight: 'bold'
                }}
              >
                登録
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                onClick={onClose}
                style={{ borderRadius: '30px' }}
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

export default ChangeIconModal
