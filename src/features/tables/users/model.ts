import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { useMutation, useQuery, useQueryClient } from 'react-query'

import { key_required } from '@/entities'
import { ActivateResType, UserType } from '@/features'
import { useCurrentUser } from '@/hooks'
import { navModel, noRefetch, swalAlert, useAxiosAuthClient } from '@/shared'

export const useListUsersQuery = () => {
  const authInstance = useAxiosAuthClient()

  return useQuery({
    queryKey: [key_required.users_list, authInstance],
    queryFn: () => authInstance.get<UserType[]>('/user').then(res => res.data),
    enabled: !!authInstance,
    ...noRefetch,
    refetchInterval: false,
    refetchOnMount: true,
  })
}

export const useActivateUserMutate = () => {
  const queryClient = useQueryClient()
  const authInstance = useAxiosAuthClient()

  return useMutation({
    mutationFn: (data: { user_id: number; isActive: boolean }) => {
      return authInstance
        .put<ActivateResType>(`/user/activate/${data.user_id}`, {
          isActive: data.isActive,
        })
        .then(res => res.data)
    },
    ...noRefetch,
    onSuccess: res => {
      swalAlert({ title: 'Выполнено', html: res.message, icon: 'success' }, 'noBtn')
      queryClient.invalidateQueries({ queryKey: [key_required.users_list] })
    },
  })
}

export const useBlockUserMutate = () => {
  const queryClient = useQueryClient()
  const authInstance = useAxiosAuthClient()

  return useMutation({
    mutationFn: (data: { user_id: number; school_id: number }) => {
      return authInstance.post('/block_cabinet', data).then(res => res.data)
    },
    ...noRefetch,
    onSuccess: res => {
      swalAlert({ title: 'Выполнено', html: res.message, icon: 'success' }, 'noBtn')
      queryClient.invalidateQueries({ queryKey: [key_required.users_list] })
    },
  })
}

export const useUnlockUserMutate = () => {
  const queryClient = useQueryClient()
  const authInstance = useAxiosAuthClient()

  return useMutation({
    mutationFn: (data: { id: number }) => {
      return authInstance.delete(`/block_cabinet/${data.id}`).then(res => res.data)
    },
    ...noRefetch,
    onSuccess: res => {
      swalAlert({ title: 'Выполнено', html: res.message, icon: 'success' }, 'noBtn')
      queryClient.invalidateQueries({ queryKey: [key_required.users_list] })
    },
  })
}

export const useLoginCabinetMutate = () => {
  const { push } = useRouter()
  const user = useCurrentUser()

  return (email: string) => {
    signIn('auth_login_cabinet', {
      email,
      accessToken: user?.accessToken,
    }).then(res => {
      push(navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.settings)
    })
  }
}

// export const useRemoveUserModerationMutate = () => {
//   const queryClient = useQueryClient()
//   const authInstance = useAxiosAuthClient()

//   return useMutation({
//     mutationFn: (user_id: number) => {
//       return authInstance.delete<{ id: number }>(`/user/${user_id}`).then(res => res.data)
//     },
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
