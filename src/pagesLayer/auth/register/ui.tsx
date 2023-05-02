import { memo } from 'react'

import { FormRegister } from '@/features'
import { Meta } from '@/shared'

import styles from './styles.module.scss'

export const RegistrationPage = memo(() => {
  return (
    <>
      <Meta title={'Registration'} description={'Страница регистрации личного кабинета'} />
      <div className={styles.mainClass}>
        <div className={styles.wrapper}>
          <FormRegister />
        </div>
      </div>
    </>
  )
})
