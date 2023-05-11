import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { navModel, noRefetch } from '@/shared'

import { requestLogout } from './api'

export const useLogout = () => {
  const { push } = useRouter()

  return useMutation({
    mutationFn: requestLogout,
    ...noRefetch,
    onSuccess: res => {
      push(`${navModel.MAIN_ROUTE.auth}${navModel.AUTH_ROUTE.login}`)
    },
  })
}
