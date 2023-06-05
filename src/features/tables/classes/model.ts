import { useQuery } from 'react-query'

import { useCurrentUser } from '@/hooks'
import { noRefetch, useAxiosAuthClient } from '@/shared'

import { ClassSchoolType } from './types'

export const useListClassesQuery = () => {
  const authInstance = useAxiosAuthClient()
  const user = useCurrentUser()

  return useQuery({
    queryKey: ['classes_list', authInstance, user?.school_id],
    queryFn: () =>
      authInstance
        .get<ClassSchoolType[]>(`/class?school_id=${user?.school_id}`)
        .then(res => res.data),
    enabled: !!authInstance && !!user,
    ...noRefetch,
    refetchInterval: false,
    refetchOnMount: true,
  })
}
