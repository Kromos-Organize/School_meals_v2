import { CircularProgress } from '@mui/material'
import { memo } from 'react'

import { NavBar, useGetSAdmin } from '@/features'

import { AvatarInfo } from '@/shared/avatarInfo'

import styles from './styles.module.scss'

export const SideBar = memo(() => {
  const { user } = useGetSAdmin()

  if (!user) {
    return <CircularProgress />
  }

  return (
    <aside className={styles.aside}>
      <div className={styles.aside_inner}>
        <div className={styles.sidebar}>
          <AvatarInfo fname={user.fname} name={user.name} role={user.role} />
          <NavBar />
        </div>
      </div>
    </aside>
  )
})
