import { memo } from 'react'

import { NavBar } from '@/features'

import { AvatarInfo } from '@/shared/avatarInfo'

import styles from './styles.module.scss'

export const SideBar = memo(() => {
  return (
    <aside className={styles.aside}>
      <div className={styles.aside_inner}>
        <div className={styles.sidebar}>
          <AvatarInfo fname="Шавлинский" name="Роман" role="S_ADMIN" />
          <NavBar />
        </div>
      </div>
    </aside>
  )
})
