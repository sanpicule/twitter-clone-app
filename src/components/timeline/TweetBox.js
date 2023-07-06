import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Avatar, Button } from '@mui/material'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import classNames from 'classnames';

import { selectUser } from '../../feature/userSlice'
import { useSelector } from 'react-redux'
import styles from './styles/TweetBox.module.css'
import db from '../../Firebase'

const TweetBox = ({ setOpen, setMessage }) => {
  const [postContent, setPostContent] = useState('')
  const [postImageUrl, setPostImageUrl] = useState('')
  const user = useSelector(selectUser)
  const isTrue = postContent ? true : false
  const buttonClasses = classNames(styles.tweet_button, { [styles.tweet_button_active]: isTrue });

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      post_id: uuidv4(),
      post_content: postContent,
      post_image: postImageUrl,
      display_name: 'Sanpi',
      icon_image: user.photoURL,
      user_name: 'sanpicule',
      official_flag: true,
      post_date: serverTimestamp()
    }
    addDoc(collection(db, 'posts'), data)
    setPostContent('')
    setPostImageUrl('')
    setOpen(true)
    setMessage('ツイートしました')
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
        <input
          value={postImageUrl}
          placeholder='画像のURLを入力してください'
          className={styles.image_input}
          onChange={(e) => setPostImageUrl(e.target.value)}
        />
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
