import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SidebarOption from './SidebarOption';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Sidebar.css'
import TweetModal from '../modal/TweetModal.js'


const Sidebar = () => {

  return (
    <div className='sidebar'>
      <TwitterIcon className='sidebar_twitter_icon' />
      <SidebarOption Text='ホーム' Icon={HomeIcon}/>
      <SidebarOption Text='話題を検索' Icon={SearchIcon}/>
      <SidebarOption Text='通知' Icon={NotificationsNoneIcon}/>
      <SidebarOption Text='メッセージ' Icon={EmailIcon}/>
      <SidebarOption Text='ブックマーク' Icon={BookmarkBorderIcon}/>
      <SidebarOption Text='リスト' Icon={ListAltIcon}/>
      <SidebarOption Text='プロフィール' Icon={PermIdentityIcon}/>
      <SidebarOption Text='もっと見る' Icon={MoreHorizIcon}/>
      <TweetModal/>
    </div>
  )
}

export default Sidebar
