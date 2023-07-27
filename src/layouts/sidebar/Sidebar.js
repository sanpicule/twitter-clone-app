import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  Avatar,
  Box,
  Button,
  Stack,
  Typography
} from '@mui/material'
import CodeOffIcon from '@mui/icons-material/CodeOff';
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import EmailIcon from '@mui/icons-material/Email'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import styles from './styles/Sidebar.module.css'
import LogoutModal from '../../components/common/modal/LogoutModal'
import TweetModal from '../../components/common/modal/TweetModal'
import SidebarOption from './SidebarOption'
import { selectUser } from '../../feature/userSlice'
import SidebarProfileDots from './SidebarProfileDots'
import ChangeIconModal from '../../components/common/modal/ChangeIconModal'

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = useState(false)
  const [modalChangeIconOpen, setModalChangeIconOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const user = useSelector(selectUser)

  return (
    <div className={styles.sidebar}>
      <Box
        component={Link}
        to={'/'}
      >
        <CodeOffIcon
          className={styles.sidebar_twitter_icon}
        />
      </Box>
      <SidebarOption
        Text='ホーム'
        Icon={HomeIcon}
        url={'/'}
      />
      <SidebarOption Text='話題を検索' Icon={SearchIcon}/>
      <SidebarOption Text='通知' Icon={NotificationsNoneIcon}/>
      <SidebarOption Text='メッセージ' Icon={EmailIcon}/>
      <SidebarOption Text='ブックマーク' Icon={BookmarkBorderIcon}/>
      <SidebarOption Text='リスト' Icon={ListAltIcon}/>
      <SidebarOption
        Text='プロフィール'
        Icon={PermIdentityIcon}
        url={'/profile'}
      />
      <SidebarOption Text='もっと見る' Icon={MoreHorizIcon}/>
      <Button
        variant="outlined"
        className={styles.sidebar_tweet}
        onClick={handleOpen}
      >
        ツイートする
      </Button>
      <TweetModal
        open={open}
        setOpen={setOpen}
      />
      <LogoutModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <ChangeIconModal
        isOpen={modalChangeIconOpen}
        onClose={() => setModalChangeIconOpen(false)}
      />
      <Stack
        direction='row'
        justifyContent='space-between'
        gap={1}
        className={styles.user_info}
      >
        <Stack direction='row' gap={1} alignItems='center'>
          <Avatar src={user.photoURL} />
          <Stack>
            <Typography>{user.displayName}</Typography>
            <Typography fontSize='small' color='gray'>@sanpicule</Typography>
          </Stack>
        </Stack>
        <SidebarProfileDots
          setModalOpen={setModalOpen}
          setModalChangeIconOpen={setModalChangeIconOpen}
        />
      </Stack>
    </div>
  )
}

export default Sidebar
