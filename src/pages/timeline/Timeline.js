import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import {
  Alert,
  Box,
  Snackbar,
  Typography
} from '@mui/material'

import styles from './styles/Timeline.module.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from '../../Firebase'

const Timeline = () => {
  const [posts, setPosts] = useState([])
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts'), orderBy('post_date', 'desc')),
      (querySnapshot) => {
        const updatedPosts = querySnapshot.docs.map((doc) => doc.data())
        setPosts(updatedPosts)
      }
    )
    return () => {
      unsubscribe()
    }
  }, [])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <div className={styles.timeline}>
      <div className={styles.header}>
        <Typography className={styles.time_line_title}>ホーム</Typography>
      </div>
      <TweetBox
        setOpen={setOpen}
        setMessage={setMessage}
      />
      {posts.map((post) => (
        <Post
          key={post.post_id}
          post={post}
          setOpen={setOpen}
          setMessage={setMessage}
        />
      ))}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Box boxShadow={3}>
          <Alert onClose={handleClose} style={{ backgroundColor: 'lightgreen' }}>
            {message}
          </Alert>
        </Box>
      </Snackbar>
    </div>
  )
}

export default Timeline