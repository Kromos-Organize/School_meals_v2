import { useTranslation } from 'react-i18next'
import { useMutation, useQuery, useQueryClient } from 'react-query'

import { useCurrentUser } from '@/hooks'
import { useConfirm } from '@/hooks/useConfirm'
import { noRefetch, swalAlert, useAxiosAuthClient } from '@/shared'

import { ClassStudentType, StudentType } from './types'

export const useListStudentsQuery = () => {
  const authInstance = useAxiosAuthClient()
  const user = useCurrentUser()

  return useQuery({
    queryKey: ['students_list', authInstance, user?.school_id],
    queryFn: () =>
      authInstance
        .get<StudentType[]>(`/student/school?school_id=${user?.school_id}`)
        .then(res => res.data),
    enabled: !!authInstance && !!user,
    ...noRefetch,
    refetchInterval: false,
    refetchOnMount: true,
  })
}

export const useListClassesQuery = () => {
  const authInstance = useAxiosAuthClient()
  const user = useCurrentUser()

  return useQuery<ClassStudentType[]>({
    queryKey: ['classes_list', authInstance, user?.school_id],
  })
}

export const useRemoveStudentMutate = () => {
  const queryClient = useQueryClient()
  const authInstance = useAxiosAuthClient()
  const { t } = useTranslation('students')
  const confirm = useConfirm(t('L_req_remove'))

  return useMutation({
    mutationFn: (student_id: number) => {
      return confirm().then(res => {
        if (res) {
          return authInstance.delete<{ id: number }>(`/student/${student_id}`).then(res => res.data)
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
        queryClient.invalidateQueries({ queryKey: ['students_list'] })
      }
    },
  })
}
