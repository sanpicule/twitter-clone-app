import React from 'react'
import { Stack, Typography } from '@mui/material'
import styles from './styles/SidebarOption.module.css'
import { Link } from 'react-router-dom'

const SidebarOption = ({ Text, Icon, url }) => {
  return (
    <Stack
      component={Link}
      to={url}
      direction='row'
      alignItems='center'
      className={styles.sidebar_option}
    >
      <Icon />
      <Typography
        className={styles.title}
      >
        {Text}
      </Typography>
    </Stack>
  )
}

export default SidebarOption
