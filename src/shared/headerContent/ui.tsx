import { memo } from 'react'

import styles from './styles.module.scss'

type PropsType = {
  title: string
}

export const HeaderContent = memo(({ title }: PropsType) => {
  return <div className={styles.header}>{title}</div>
})
