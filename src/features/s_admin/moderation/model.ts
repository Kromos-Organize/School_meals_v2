import { useMutation, useQuery, useQueryClient } from 'react-query'

import { noRefetch, swalAlert } from '@/shared'

import { moderationApi } from './api'

export const useGetListModerationQuery = () =>
  useQuery({
    queryKey: ['moderation_list'],
    queryFn: moderationApi.getListModeration,
    ...noRefetch,
    refetchInterval: false,
    refetchOnMount: true,
  })

export const useActivateUserMutate = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: moderationApi.activateUser,
    ...noRefetch,
    onSuccess: res => {
      swalAlert({ title: 'Выполнено', html: res.message, icon: 'success' })
      queryClient.invalidateQueries({ queryKey: ['moderation_list'] })
    },
  })
}

export const useRemoveUserModerationMutate = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: moderationApi.removeUser,
    ...noRefetch,
    onSuccess: res => {
      swalAlert({
        title: 'Выполнено',
        html: 'Пользователь удален из списка модерации',
        icon: 'success',
      })
      queryClient.invalidateQueries({ queryKey: ['moderation_list'] })
    },
  })
}
