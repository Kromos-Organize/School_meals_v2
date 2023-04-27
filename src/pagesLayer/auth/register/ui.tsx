import { memo } from 'react'

import { FormRegister } from '@/entities'
import { Meta } from '@/shared'

import styles from './styles.module.scss'

export const Registration = memo(() => {
  return (
    <>
      <Meta title={'Registration'} />
      <div className={styles.mainClass}>
        <div className={styles.wrapper}>
          <FormRegister />
        </div>
      </div>
    </>
  )
})
