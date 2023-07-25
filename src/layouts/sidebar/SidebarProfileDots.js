import { useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import { Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import ImageIcon from '@mui/icons-material/Image'

const SidebarProfileDots = ({ setModalOpen, setModalChangeIconOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    setModalOpen(true)
    handleClose()
  }
  const handleChangeIconModal = () => {
    setModalChangeIconOpen(true)
    handleClose()
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          style={{ color: 'red' }}
          onClick={handleLogout}
        >
          <LogoutIcon />
          <Typography style={{ marginLeft: '10px' }}>ログアウト</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <GroupAddIcon />
          <Typography style={{ marginLeft: '10px' }}>アカウントを追加</Typography>
        </MenuItem>
        <MenuItem onClick={handleChangeIconModal}>
          <ImageIcon />
          <Typography style={{ marginLeft: '10px' }}>アイコン画像を変更</Typography>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default SidebarProfileDots