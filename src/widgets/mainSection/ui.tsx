import { FC, PropsWithChildren, memo } from 'react'

import styles from './styles.module.scss'

export const MainSection: FC<PropsWithChildren> = memo(({ children }) => (
  <section className={styles.section_container}>
    <div className={styles.content_wrapper}>{children}</div>
  </section>
))
