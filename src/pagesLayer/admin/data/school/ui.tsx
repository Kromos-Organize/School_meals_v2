import { memo } from 'react'

import { Meta } from '@/shared'

import styles from './styles.module.scss'

export const SchoolPage = memo(() => {
  return (
    <>
      <Meta title={'School'} description={'Страница школы'} />
      <div className={styles.mainClass}>
        <div className={styles.wrapper}>School Page</div>
      </div>
    </>
  )
})
