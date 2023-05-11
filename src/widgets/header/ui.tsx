import LogoutIcon from '@mui/icons-material/Logout'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { memo } from 'react'

import { BtnIcon, CustomText, Locale } from '@/shared'

import { useLogout } from './model'
import styles from './styles.module.scss'

export const Header = memo(() => {
  const { mutate: exit } = useLogout()

  return (
    <AppBar position="static" elevation={0} className={styles.header}>
      <Toolbar className={styles.toolBar}>
        <CustomText text="School Meals" />
        <Box className={styles.items}>
          <Locale />
          <BtnIcon callback={exit}>
            <LogoutIcon />
          </BtnIcon>
        </Box>
      </Toolbar>
    </AppBar>
  )
})
