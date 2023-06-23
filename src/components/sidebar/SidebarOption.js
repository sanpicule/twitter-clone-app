import React from 'react'
import { Stack, Typography } from '@mui/material'
import './SidebarOption.css'

const SidebarOption = ({ Text, Icon }) => {
  return (
    <Stack direction='row' alignItems='center' className='sidebar_option'>
      <Icon />
      <Typography className='title'>{Text}</Typography>
    </Stack>
  )
}

export default SidebarOption
