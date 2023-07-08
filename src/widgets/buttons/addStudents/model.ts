import { useTranslation } from 'react-i18next'
import { useMutation, useQueryClient } from 'react-query'

import { key_required } from '@/entities'
import { StudentFieldsType } from '@/features'
import { useCurrentUser } from '@/hooks'
import { noRefetch, swalAlert, useAxiosAuthClient } from '@/shared'

export const useCreateStudentMutate = (closeModal: () => void) => {
  const authInstance = useAxiosAuthClient()
  const user = useCurrentUser()
  const queryClient = useQueryClient()
  const { t } = useTranslation('students')

  return useMutation({
    mutationFn: (data: StudentFieldsType) =>
      authInstance.post('/student', { ...data, school_id: user?.school_id }).then(res => res.data),
    ...noRefetch,
    onSuccess: res => {
      closeModal()
      swalAlert(
        { title: t('L_success_save'), html: t('L_student_added'), icon: 'success' },
        'noBtn'
      )
      queryClient.invalidateQueries({ queryKey: [key_required.students_list] })
    },
  })
}
