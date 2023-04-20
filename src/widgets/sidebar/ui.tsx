import { memo } from 'react'

import styles from './styles.module.scss'

export const SideBar = memo(() => {
  return (
    <aside className={styles.aside}>
      <div className={styles.aside_inner}>
        <div className={styles.sidebar}>
          <div className={styles.user_box}>show user data</div>
          navigation
        </div>
      </div>
    </aside>
  )
})
