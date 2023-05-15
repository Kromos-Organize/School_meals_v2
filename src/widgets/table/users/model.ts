import { useRouter } from 'next/router'
import { useMutation, useQuery, useQueryClient } from 'react-query'

import { setCurrentUser, useCurrentUser } from '@/entities'
import { LS, navModel, noRefetch, swalAlert } from '@/shared'

import { moderationApi } from './api'

export const useListUsersQuery = () =>
  useQuery({
    queryKey: ['users_list'],
    queryFn: moderationApi.getUsersList,
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
      swalAlert({ title: 'Выполнено', html: res.message, icon: 'success' }, 'noBtn')
      queryClient.invalidateQueries({ queryKey: ['users_list'] })
    },
  })
}

export const useBlockUserMutate = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: moderationApi.blockUser,
    ...noRefetch,
    onSuccess: res => {
      swalAlert({ title: 'Выполнено', html: res.message, icon: 'success' }, 'noBtn')
      queryClient.invalidateQueries({ queryKey: ['users_list'] })
    },
  })
}

export const useUnlockUserMutate = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: moderationApi.unlockUser,
    ...noRefetch,
    onSuccess: res => {
      swalAlert({ title: 'Выполнено', html: res.message, icon: 'success' }, 'noBtn')
      queryClient.invalidateQueries({ queryKey: ['users_list'] })
    },
  })
}

export const useLoginCabinetMutate = () => {
  const { push } = useRouter()

  const setCurrent = useCurrentUser(setCurrentUser)

  return useMutation({
    mutationFn: moderationApi.signInCabinet,
    ...noRefetch,
    onSuccess: res => {
      LS.set('accessToken', res.data.accessToken)
      setCurrent({ id: res.data.id, role: res.data.role })
      push(navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.settings)
    },
  })
}

// export const useRemoveUserModerationMutate = () => {
//   const queryClient = useQueryClient()

//   return useMutation({
//     mutationFn: moderationApi.removeUser,
//     ...noRefetch,
//     onSuccess: res => {
//       swalAlert({
//         title: 'Выполнено',
//         html: 'Пользователь удален из списка',
//         icon: 'success',
//       })
//       queryClient.invalidateQueries({ queryKey: ['users_list'] })
//     },
//   })
// }
