import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'
import { useMutation } from 'react-query'

import { useCurrentUser } from '@/hooks'
import { navModel, noRefetch, useAxiosAuth } from '@/shared'

export const useLogOutMutate = () => {
  const { push } = useRouter()
  const currentUser = useCurrentUser()
  const axiosAuth = useAxiosAuth()

  const logOut = () => {
    return axiosAuth
      .post('/auth/logout', { refreshToken: currentUser?.refreshToken })
      .then(res => res)
  }

  return useMutation({
    mutationFn: logOut,
    ...noRefetch,
    onSuccess: res => {
      signOut()
      push(navModel.MAIN_ROUTE.auth + navModel.AUTH_ROUTE.login)
    },
  })
}
