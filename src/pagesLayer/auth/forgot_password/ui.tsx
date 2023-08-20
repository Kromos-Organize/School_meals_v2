import { memo } from 'react'

import { Meta } from '@/shared'
import { ForgotPasswordWidget } from '@/widgets'

export const ForgotPasswordPage = memo(() => {
  return (
    <>
      <Meta title={'Вход'} description={'Страница восстановления'} />
      <ForgotPasswordWidget />
    </>
  )
})
