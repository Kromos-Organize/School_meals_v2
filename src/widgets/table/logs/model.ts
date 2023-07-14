import { useMutation, useQuery } from 'react-query'

import { key_required } from '@/entities'
import { FileNameTypes, GetDataLogType, ListLogsType } from '@/features'
import { noRefetch, useAxiosAuthClient } from '@/shared'

export const useListLogsQuery = () => {
  const authInstance = useAxiosAuthClient()

  return useQuery({
    queryKey: [key_required.logs_list, authInstance],
    queryFn: () => authInstance.get<ListLogsType>('/logs').then(res => res.data),
    enabled: !!authInstance,
    ...noRefetch,
    refetchInterval: false,
    refetchOnMount: true,
  })
}

export const useLogMutate = () => {
  const authInstance = useAxiosAuthClient()

  return useMutation({
    mutationFn: (data: GetDataLogType) =>
      authInstance
        .get(`/logs/log?date=${data.date}&file_name=${data.file_name}`)
        .then(res => res.data),
    ...noRefetch,
    onSuccess: res => {
      return res
    },
  })
}
