import React from 'react'
import {
  deleteDoc,
  query,
  where,
  getDocs,
  collection
} from "firebase/firestore"
import db from '../../Firebase'
import classNames from 'classnames';

import {
  ChatBubbleOutline,
  FavoriteBorder,
  Repeat,
  VerifiedUser
} from '@mui/icons-material'
import {
  Avatar,
  Stack,
  Typography
} from '@mui/material'
import IosShareIcon from '@mui/icons-material/IosShare'

import styles from './styles/Post.module.css'
import { selectUser } from '../../feature/userSlice'
import { useSelector } from 'react-redux'
import DotsMenu from '../../common/components/DotsMenu'

const Post = ({ post, setOpen, setMessage }) => {
  const bubble = classNames(styles.bubble, styles.post_icon)
  const repeat = classNames(styles.repeat, styles.post_icon)
  const fav = classNames(styles.fav, styles.post_icon)
  const share = classNames(styles.public, styles.post_icon)
  const user = useSelector(selectUser)
  const handleDelete = async(postId) => {
    try {
      const q = query(collection(db, 'posts'), where('post_id', '==', postId))
      const querySnapshot = await getDocs(q)
      if (querySnapshot.empty) {
        setMessage('投稿が見つかりません。')
        return
      }
      const doc = querySnapshot.docs[0]
      await deleteDoc(doc.ref)
      setOpen(true)
      setMessage('投稿を削除しました。')
    } catch (error) {
      setMessage('削除に失敗しました', error)
    }
  }

  return (
    <div className={styles.post}>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Stack direction='row' alignItems='center'>
          <Avatar
            className={styles.post_avatar}
            src={post.icon_image}
          />
          <Typography
            className={styles.post_header_text}
          >
            {post.display_name}
          </Typography>
          {post.official_flag &&
            <VerifiedUser className={styles.post_badge} />
          }
          <Typography className={styles.post_special}>@{post.user_name}</Typography>
        </Stack>
          <DotsMenu
            handleDelete={handleDelete}
            postId={post.post_id}
            iconImage={post.icon_image}
            photoURL={user.photoURL}
          />
      </Stack>
      <Stack className={styles.post_contents}>
        <Typography
          className={styles.post_content}
        >
          {post.post_content}
        </Typography>
        {post.post_image &&
          <img
            className={styles.post_image}
            src={post.post_image}
            alt=''
          />
        }
      </Stack>
      <Stack
        direction='row'
        justifyContent='space-between'
        className={styles.post_icons}
      >
        <Stack
          direction='row'
          spacing={8}
        > 
          <ChatBubbleOutline fontSize='small' className={bubble} />
          <Repeat fontSize='small' className={repeat} />
          <FavoriteBorder fontSize='small' className={fav} />
        </Stack>
        <IosShareIcon fontSize='small' className={share} />
      </Stack>
    </div>
  )
}

export default Post