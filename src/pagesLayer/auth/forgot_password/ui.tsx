import { memo } from 'react'

import { Meta } from '@/shared'
import { ForgotPasswordWidget } from '@/widgets'

export const ForgotPasswordPage = memo(() => {
  return (
    <>
      <Meta
        title={'Восстановления пароля'}
        description={
          'На данной странице вы можете восстановить ваш пароль указав email, с помощью которого вы регистрировались в нашем сервисе'
        }
      />
      <ForgotPasswordWidget />
    </>
  )
})
