import React, { useState } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import EmailIcon from '@mui/icons-material/Email'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Box, Button } from '@mui/material'
import styles from './styles/Sidebar.module.css'
import LogoutModal from '../../components/common/modal/LogoutModal'
import TweetModal from '../../components/common/modal/TweetModal'
import SidebarOption from './SidebarOption'
import { Link } from 'react-router-dom'



const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = useState(false)
  const handleOpen = () => setOpen(true);

  return (
    <div className={styles.sidebar}>
      <Box
        component={Link}
        to={'/'}
      >
        <TwitterIcon
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
      <TweetModal open={open} setOpen={setOpen} />
      <Button
        onClick={() => setModalOpen(true)}
        style={{ marginTop: '20px', width: '100%' }}
      >
        ログアウト
      </Button>
      <LogoutModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  )
}

export default Sidebar
