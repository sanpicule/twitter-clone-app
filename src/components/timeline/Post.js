import React from 'react'
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Repeat,
  VerifiedUser
} from '@mui/icons-material'
import IosShareIcon from '@mui/icons-material/IosShare';
import {
  Avatar,
  Stack,
  Typography
} from '@mui/material'
import './Post.css'

const Post = ({ display_name, icon_image, post_image, post_content, official_flag, user_name }) => {
  return (
    <div className='post'>
      <Stack direction='row' alignItems='center'>
        <Avatar className='post_avatar' src={icon_image} />
        <Typography className='post_header_text'>{display_name}</Typography>
        {official_flag &&
          <VerifiedUser className='post_badge' />
        }
        <Typography className='post_special'>@{user_name}</Typography>
      </Stack>
      <Stack className='post_contents'>
        <Typography className='post_content'>{post_content}</Typography>
        {post_image &&
          <img
            className='post_image'
            src={post_image}
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