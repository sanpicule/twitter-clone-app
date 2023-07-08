import * as React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded'
import { Typography } from '@mui/material'

const DotsMenu = ({ handleDelete, postId, iconImage, photoURL }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  
  const handleClose = () => {
    setAnchorEl(null)
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
        {photoURL === iconImage &&
          <MenuItem onClick={() => handleDelete(postId)} style={{ color: 'red' }}>
            <DeleteRoundedIcon />
            <Typography style={{ marginLeft: '10px' }}>削除</Typography>
          </MenuItem>
        }
        <MenuItem onClick={handleClose}>
          <Person2RoundedIcon />
          <Typography style={{ marginLeft: '10px' }}>プロフィール</Typography>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default DotsMenu