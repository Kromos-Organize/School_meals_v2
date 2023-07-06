import { useQuery } from 'react-query'

import { useCurrentUser } from '@/hooks'
import { noRefetch, useAxiosAuthClient } from '@/shared'

import { MenuType } from './types'

export const useListTypeMenusQuery = () => {
  const authInstance = useAxiosAuthClient()
  const user = useCurrentUser()

  return useQuery({
    queryKey: ['menus_list', authInstance, user?.school_id],
    queryFn: () =>
      authInstance.get<MenuType[]>(`/type-menu?school_id=${user?.school_id}`).then(res => res.data),
    enabled: !!authInstance && !!user,
    ...noRefetch,
    refetchInterval: false,
    refetchOnMount: true,
  })
}
