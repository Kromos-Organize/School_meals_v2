import { useQuery } from 'react-query'

import { useCurrentUser } from '@/hooks'
import { noRefetch, useAxiosAuthClient } from '@/shared'

import { ClassType, ClassTypeByNumber } from './types'

export const useListClassesQuery = () => {
  const authInstance = useAxiosAuthClient()
  const user = useCurrentUser()

  return useQuery({
    queryKey: ['classes_list', authInstance, user?.school_id],
    queryFn: () =>
      authInstance.get<ClassType[]>(`/class?school_id=${user?.school_id}`).then(res => {
        const upgradeClasses: ClassTypeByNumber = {}

        res.data.forEach(c => {
          if (upgradeClasses[`${c.number}`]) {
            upgradeClasses[c.number].push(c)
          } else {
            upgradeClasses[c.number] = []
            upgradeClasses[c.number].push(c)
          }
        })

        return upgradeClasses
      }),
    enabled: !!authInstance && !!user?.school_id,
    ...noRefetch,
    refetchInterval: false,
    refetchOnMount: true,
  })
}
