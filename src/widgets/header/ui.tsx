import LogoutIcon from '@mui/icons-material/Logout'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { memo } from 'react'

import { BtnIcon, CustomText } from '@/shared'

import styles from './styles.module.scss'

export const Header = memo(() => {
  return (
    <AppBar position="static" elevation={0} className={styles.header}>
      <Toolbar className={styles.toolBar}>
        <CustomText text="School Meals" />
        <Box>
          <BtnIcon callback={() => {}}>
            <LogoutIcon />
          </BtnIcon>
        </Box>
      </Toolbar>
    </AppBar>
  )
})
