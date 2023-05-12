import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { navModel, noRefetch } from '@/shared'

import { logOut } from './api'

export const useLogOutMutate = () => {
  const { push } = useRouter()

  return useMutation({
    mutationFn: logOut,
    ...noRefetch,
    onSuccess: res => {
      push(navModel.MAIN_ROUTE.auth + navModel.AUTH_ROUTE.login)
    },
  })
}
