import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Avatar, Button } from '@mui/material'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import './TweetBox.css'
import db from '../../Firebase'

const TweetBox = () => {
  const [postContent, setPostContent] = useState('')
  const [postImageUrl, setPostImageUrl] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      post_id: uuidv4(),
      post_content: postContent,
      post_image: postImageUrl,
      display_name: 'Sanpi',
      icon_image: 'https://taroken.org/wp-content/uploads/2017/07/sunlight-e1500176424123.jpg',
      user_name: 'sanpicule',
      official_flag: true,
      post_date: serverTimestamp()
    }
    console.log(data)
    addDoc(collection(db, 'posts'), data);
    setPostContent('')
    setPostImageUrl('')
  }
  return (
    <div className='tweet_box'>
      <form className='tweet_form' onSubmit={handleSubmit}>
        <div className='tweet_box_input'>
          <Avatar className='avatar' src='https://taroken.org/wp-content/uploads/2017/07/sunlight-e1500176424123.jpg' />
          <input
            value={postContent}
            placeholder='今何してる？'
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>
        <input
          value={postImageUrl}
          placeholder='画像のURLを入力してください'
          className='image_input'
          onChange={(e) => setPostImageUrl(e.target.value)}
        />
        <Button className='tweet_button' type='submit'>ツイートする</Button>
      </form>
    </div>
  )
}

export default TweetBox
