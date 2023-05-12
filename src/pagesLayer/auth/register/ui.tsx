import { memo } from 'react'

import { Meta } from '@/shared'
import { RegisterWidget } from '@/widgets'

export const RegistrationPage = memo(() => {
  return (
    <>
      <Meta title={'Registration'} description={'Страница регистрации личного кабинета'} />
      <RegisterWidget />
    </>
  )
})
