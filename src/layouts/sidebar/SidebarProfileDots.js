import { useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';

const SidebarProfileDots = ({ setModalOpen }) => {
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
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem style={{ color: 'red' }} onClick={handleLogout}>
          <LogoutIcon />
          <Typography style={{ marginLeft: '10px' }}>ログアウト</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <GroupAddIcon />
          <Typography style={{ marginLeft: '10px' }}>アカウントを追加</Typography>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default SidebarProfileDots