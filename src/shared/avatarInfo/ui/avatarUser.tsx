import { Avatar } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { FC, memo } from 'react'

import styles from '../styles.module.scss'

type PropsType = {
  avatar: string
}

export const AvatarUser: FC<PropsType> = memo(({ avatar }) => {
  return (
    <Avatar className={styles.avatar} sx={{ bgcolor: deepPurple[500] }}>
      {avatar ? avatar : 'A'}
    </Avatar>
  )
})
