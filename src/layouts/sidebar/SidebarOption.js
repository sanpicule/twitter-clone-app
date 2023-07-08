import React from 'react'
import { Stack, Typography } from '@mui/material'
import styles from './styles/SidebarOption.module.css'

const SidebarOption = ({ Text, Icon }) => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      className={styles.sidebar_option}>
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
