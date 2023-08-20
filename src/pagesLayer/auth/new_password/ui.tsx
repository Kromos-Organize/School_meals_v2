import { useRouter } from 'next/router'
import { memo } from 'react'

import { Meta } from '@/shared'
import { NewPasswordWidget } from '@/widgets'

export const NewPasswordPage = memo(() => {
  const { query } = useRouter()

  return (
    <>
      <Meta title={'Вход'} description={'Страница восстановления'} />
      <NewPasswordWidget recoveryCode={query.recoveryCode as string} />
    </>
  )
})
