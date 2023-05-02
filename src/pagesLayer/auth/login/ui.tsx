import { memo } from 'react'

import { FormLogin } from '@/features'
import { Meta } from '@/shared'

import styles from './styles.module.scss'

export const LoginPage = memo(() => {
  return (
    <>
      <Meta title={'Login'} description={'Страница входа в личный кабинет администратора школы'} />
      <div className={styles.mainClass}>
        <div className={styles.wrapper}>
          <FormLogin />
        </div>
      </div>
    </>
  )
})
