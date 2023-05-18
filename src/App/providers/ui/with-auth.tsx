import { FC, PropsWithChildren, useEffect } from 'react'
import { useQuery } from 'react-query'

import { setCurrentUser, useCurrentUser } from '@/entities'
import { LS, useRefreshToken } from '@/shared'

export const WithAuth: FC<PropsWithChildren> = ({ children }) => {
  const setCurrent = useCurrentUser(setCurrentUser)

  // const { data, isSuccess } = useRefreshToken()

  // useEffect(() => {
  //   if (isSuccess) {
  //     const { accessToken, ...user } = data.data

  //     setCurrent(user)
  //     LS.set('accessToken', accessToken)
  //   }
  // }, [isSuccess])

  return <>{children}</>
}
