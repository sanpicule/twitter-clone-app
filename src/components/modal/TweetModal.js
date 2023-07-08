import React, { useState } from 'react'
import { Box, Button, Modal, Avatar } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from '../../Firebase'
import styles from './TweetModal.module.css'
import { selectUser } from '../../feature/userSlice'
import { useSelector } from 'react-redux'

const TweetModal = ({ setOpen, open }) => {
  const handleClose = () => setOpen(false);
  const [postContent, setPostContent] = useState('')
  const [postImageUrl, setPostImageUrl] = useState('')
  const isTrue = postContent ? true : false
  const user = useSelector(selectUser)
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      post_id: uuidv4(),
      post_content: postContent,
      post_image: postImageUrl,
      display_name: user.displayName,
      icon_image: user.photoURL,
      user_name: 'sanpicule',
      official_flag: true,
      post_date: serverTimestamp()
    }
    addDoc(collection(db, 'posts'), data)
    setPostContent('')
    setPostImageUrl('')
    setOpen(false)

  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        modal-title="modal-modal-title"
        modal-description="modal-modal-description"
      >
        <Box className={ styles.tweet_modal_wrapper }>
          <form className={ styles.tweet_form } onSubmit={handleSubmit}>
            <div className={ styles.tweet_box_input }>
              <Avatar src= { user.photoURL } />
              <input
                value={postContent}
                placeholder='今何してる？'
                onChange={(e) => setPostContent(e.target.value)}
              />
            </div>
            <input
              value={postImageUrl}
              placeholder='画像のURLを入力してください'
              className={ styles.image_input }
              onChange={(e) => setPostImageUrl(e.target.value)}
            />
            <Button
              className={`${styles.tweet_button} ${isTrue ? styles.tweet_button_active : ''}`}
              type='submit'
              disabled={!isTrue}
            >
              ツイートする
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default TweetModal
