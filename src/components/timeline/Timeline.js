import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"; 
import { Typography } from '@mui/material'
import './Timeline.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from '../../Firebase'

const Timeline = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts'), orderBy('post_date', 'desc')),
      (querySnapshot) => {
        const updatedPosts = querySnapshot.docs.map((doc) => doc.data())
        setPosts(updatedPosts)
      }
    );

    return () => {
      unsubscribe()
    };
  }, [])
  return (
    <div className='timeline'>
      <div className='header'>
        <Typography className='time_line_title'>ホーム</Typography>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          key={post.post_id}
          display_name={post.display_name}
          icon_image={post.icon_image}
          post_image={post.post_image}
          post_content={post.post_content}
          user_name={post.user_name}
          official_flag={post.official_flag}
        />
      ))}
    </div>
  )
}

export default Timeline