import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import React, { FC, PropsWithChildren, memo } from 'react'

import styles from './styles.module.scss'

type BtnIconType = {
  style?: any // todo remove any
  color?: 'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  callback: () => void
}

export const BtnIcon: FC<PropsWithChildren<BtnIconType>> = memo(
  ({ style, color, callback, children }) => (
    <Box className={styles.container}>
      <IconButton color={color ?? 'inherit'} onClick={callback}>
        {children}
      </IconButton>
    </Box>
  )
)
