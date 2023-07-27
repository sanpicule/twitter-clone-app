import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import classNames from 'classnames'
import { useSelector } from 'react-redux'

import { Avatar, Box, Button, IconButton } from '@mui/material'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'

import styles from './styles/TweetBox.module.css'
import { selectUser } from '../../feature/userSlice'
import { db, storage } from '../../Firebase'

const TweetBox = ({ setOpen, setMessage }) => {
  const [postContent, setPostContent] = useState('')
  const [postImageUrl, setPostImageUrl] = useState('')
  const [displayImage, setDisplayImage] = useState('')
  const user = useSelector(selectUser)
  const isTrue = postContent ? true : false
  let url = ""
  const buttonClasses = classNames(styles.tweet_button, { [styles.tweet_button_active]: isTrue })
  const fileInputRef = useRef()

  const onChangeImageHandler = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setDisplayImage(reader.result);
      }
      reader.readAsDataURL(file)
      setPostImageUrl(e.target.files[0])
      e.target.value = ""
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (postImageUrl) {
      const S =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const N = 16
        const randomChar = Array.from(crypto.getRandomValues(new Uint32Array(N)))
        .map((n) => S[n % S.length])
        .join("")
        const fileName = randomChar + "_" + postImageUrl.name
        
      await uploadBytes(ref(storage, `posts/${fileName}`), postImageUrl)
      url = await getDownloadURL(ref(storage, `posts/${fileName}`))
    }
    const data = {
      post_id: uuidv4(),
      post_content: postContent,
      post_image: url,
      display_name: user.displayName,
      icon_image: user.photoURL,
      user_name: 'sanpicule',
      official_flag: true,
      post_date: serverTimestamp()
    }
    addDoc(collection(db, 'posts'), data).then(() => {
      setPostContent('')
      setPostImageUrl('')
      setOpen(true)
      setMessage('ツイートしました')
      setDisplayImage('')
    })
  }
  return (
    <div className={styles.tweet_box}>
      <form className={styles.tweet_form} onSubmit={handleSubmit}>
        <div className={styles.tweet_box_input}>
          <Avatar className={styles.avatar} src={user.photoURL} />
          <input
            value={postContent}
            placeholder='今何してる？'
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>
        <Box className={styles.image_icon}>
          <IconButton>
            <label>
              <AddPhotoAlternateOutlinedIcon
                fontSize="small"
                className={
                  postImageUrl
                  ? styles.login_addIconLoaded
                  : styles.login_addIcon
                }
              />
              <input
                className={styles.login_hiddenIcon}
                type="file"
                onChange={onChangeImageHandler}
                ref={fileInputRef}
              />
            </label>
          </IconButton>
        </Box>
        {displayImage &&
          <img className={styles.posting_image} src={displayImage} />
        }
        <Button
          className={buttonClasses}
          type='submit'
          disabled={!isTrue}
        >
          ツイートする
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
