import { useMutation, useQuery } from 'react-query'

import { ListLogsType } from '@/features'
import { noRefetch, useAxiosAuth } from '@/shared'

export const useListLogsQuery = () => {
  const authInstance = useAxiosAuth()

  return useQuery({
    queryKey: ['logs_list', authInstance],
    queryFn: () => authInstance.get<ListLogsType>('/logs').then(res => res.data),
    enabled: !!authInstance,
    ...noRefetch,
    refetchInterval: false,
    refetchOnMount: true,
  })
}

export const useLogMutate = () => {
  const authInstance = useAxiosAuth()

  return useMutation({
    mutationFn: (date: string) => authInstance.get(`/logs/log?date=${date}`).then(res => res.data),
    ...noRefetch,
    onSuccess: res => {
      return res
    },
  })
}
