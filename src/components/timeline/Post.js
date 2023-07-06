import React from 'react'
import {
  deleteDoc,
  query,
  where,
  getDocs,
  collection
} from "firebase/firestore"
import db from '../../Firebase'

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

import './Post.css'
import { selectUser } from '../../feature/userSlice'
import { useSelector } from 'react-redux'
import DotsMenu from '../../common/components/DotsMenu'

const Post = ({ post, setOpen, setMessage }) => {
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
    <div className='post'>
      <Stack direction='row' alignItems='center'>
        <Avatar className='post_avatar' src={post.icon_image} />
        <Typography className='post_header_text'>{post.display_name}</Typography>
        {post.official_flag &&
          <VerifiedUser className='post_badge' />
        }
        <Typography className='post_special'>@{post.user_name}</Typography>
        <Stack style={{ marginLeft: '55%' }}>
          <DotsMenu
            handleDelete={handleDelete}
            postId={post.post_id}
            iconImage={post.icon_image}
            photoURL={user.photoURL}
          />
        </Stack>
      </Stack>
      <Stack className='post_contents'>
        <Typography className='post_content'>{post.post_content}</Typography>
        {post.post_image &&
          <img
            className='post_image'
            src={post.post_image}
            alt=''
          />
        }
      </Stack>
      <Stack
        direction='row'
        justifyContent='space-between'
        className='post_icons'
      >
        <Stack
          direction='row'
          spacing={8}
        > 
          <ChatBubbleOutline fontSize='small' className='bubble post_icon'></ChatBubbleOutline>
          <Repeat fontSize='small' className='repeat post_icon' />
          <FavoriteBorder fontSize='small' className='fav post_icon' />
        </Stack>
        <IosShareIcon fontSize='small' className='public post_icon' />
      </Stack>
    </div>
  )
}

export default Post