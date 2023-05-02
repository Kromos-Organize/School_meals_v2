import LogoutIcon from '@mui/icons-material/Logout'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { useRouter } from 'next/router'
import { memo, useCallback } from 'react'

import { BtnIcon, CustomText, navModel } from '@/shared'

import { requestLogout } from './api'
import styles from './styles.module.scss'

export const Header = memo(() => {
  const router = useRouter()

  const exit = useCallback(() => {
    requestLogout().then(() => {
      router.push(`${navModel.MAIN_ROUTE.auth}${navModel.AUTH_ROUTE.login}`)
    })
  }, [])

  return (
    <AppBar position="static" elevation={0} className={styles.header}>
      <Toolbar className={styles.toolBar}>
        <CustomText text="School Meals" />
        <Box>
          <BtnIcon callback={exit}>
            <LogoutIcon />
          </BtnIcon>
        </Box>
      </Toolbar>
    </AppBar>
  )
})
