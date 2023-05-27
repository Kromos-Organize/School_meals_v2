import { useMutation, useQueryClient } from 'react-query'

import { TeacherFieldsType, TeacherType } from '@/features'
import { useCurrentUser } from '@/hooks'
import { noRefetch, swalAlert, useAxiosAuthClient } from '@/shared'

export const useCreateTeacherMutate = (closeModal: () => void) => {
  const authInstance = useAxiosAuthClient()
  const user = useCurrentUser()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: TeacherFieldsType) =>
      authInstance
        .post<TeacherType>('/user/create', { ...data, school_id: user?.school_id })
        .then(res => res.data),
    ...noRefetch,
    onSuccess: res => {
      closeModal()
      swalAlert({ title: 'Выполнено', html: 'Учитель добавлен', icon: 'success' }, 'noBtn')
      queryClient.invalidateQueries({ queryKey: ['teachers_list'] })
    },
  })
}
