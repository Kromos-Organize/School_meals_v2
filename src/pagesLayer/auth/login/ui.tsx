import { memo } from 'react'

import { Meta } from '@/shared'
import { LoginWidget } from '@/widgets'

export const LoginPage = memo(() => {
  return (
    <>
      <Meta title={'Вход'} description={'Страница входа в личный кабинет администратора школы'} />
      <LoginWidget />
    </>
  )
})
