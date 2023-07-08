import { useTranslation } from 'react-i18next'
import { useMutation, useQuery, useQueryClient } from 'react-query'

import { key_required } from '@/entities'
import { TeacherType } from '@/features'
import { useCurrentUser } from '@/hooks'
import { useConfirm } from '@/hooks/useConfirm'
import { noRefetch, swalAlert, useAxiosAuthClient } from '@/shared'

export const useListTeachersQuery = () => {
  const authInstance = useAxiosAuthClient()
  const user = useCurrentUser()

  const param = `school_id=${user?.school_id}&type_user=EMPLOYEE`

  return useQuery({
    queryKey: [key_required.teachers_list, authInstance, user?.school_id],
    queryFn: () =>
      authInstance.get<TeacherType[]>(`/user/list_school?${param}`).then(res => res.data),
    enabled: !!authInstance && !!user,
    ...noRefetch,
    refetchInterval: false,
    refetchOnMount: true,
  })
}

export const useRemoveTeacherMutate = () => {
  const queryClient = useQueryClient()
  const authInstance = useAxiosAuthClient()
  const { t } = useTranslation('teachers')
  const confirm = useConfirm(t('L_req_remove'))

  return useMutation({
    mutationFn: (teacher_id: number) => {
      return confirm().then(res => {
        if (res) {
          return authInstance.delete<{ id: number }>(`/user/${teacher_id}`).then(res => res.data)
        }
      })
    },
    ...noRefetch,
    onSuccess: res => {
      if (res) {
        swalAlert({
          title: t('L_success_save'),
          html: t('L_remove_success'),
          icon: 'success',
        })
        queryClient.invalidateQueries({ queryKey: [key_required.teachers_list] })
      }
    },
  })
}
