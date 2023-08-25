import { useRouter } from 'next/router'
import { memo } from 'react'

import { Meta } from '@/shared'
import { NewPasswordWidget } from '@/widgets'

export const NewPasswordPage = memo(() => {
  const { query } = useRouter()

  return (
    <>
      <Meta
        title={'Ввод нового пароля'}
        description={
          'Здесь вы вам необходимо ввести и подтвердить новый пароль, что бы создать новый пароль и продолжить пользоваться нашим сервисом'
        }
      />
      <NewPasswordWidget recoveryCode={query.recoveryCode as string} />
    </>
  )
})
