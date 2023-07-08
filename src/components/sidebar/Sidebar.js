import React, { useState } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import HomeIcon from '@mui/icons-material/Home'
import SidebarOption from './SidebarOption'
import SearchIcon from '@mui/icons-material/Search'
import EmailIcon from '@mui/icons-material/Email'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Button } from '@mui/material'
import styles from './styles/Sidebar.module.css'
import LogoutModal from '../../common/components/LogoutModal'
import TweetModal from '../modal/TweetModal.js'



const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = useState(false)
  const handleOpen = () => setOpen(true);

  return (
    <div className={styles.sidebar}>
      <TwitterIcon className={styles.sidebar_twitter_icon} />
      <SidebarOption Text='ホーム' Icon={HomeIcon}/>
      <SidebarOption Text='話題を検索' Icon={SearchIcon}/>
      <SidebarOption Text='通知' Icon={NotificationsNoneIcon}/>
      <SidebarOption Text='メッセージ' Icon={EmailIcon}/>
      <SidebarOption Text='ブックマーク' Icon={BookmarkBorderIcon}/>
      <SidebarOption Text='リスト' Icon={ListAltIcon}/>
      <SidebarOption Text='プロフィール' Icon={PermIdentityIcon}/>
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
