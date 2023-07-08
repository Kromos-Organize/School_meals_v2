import { useTranslation } from 'react-i18next'
import { useMutation, useQueryClient } from 'react-query'

import { key_required } from '@/entities'
import { ClassFieldsType, ClassType } from '@/features'
import { useCurrentUser } from '@/hooks'
import { noRefetch, swalAlert, swalAlertError, useAxiosAuthClient } from '@/shared'

export const useCreateClassMutate = (closeModal: () => void) => {
  const authInstance = useAxiosAuthClient()
  const user = useCurrentUser()
  const queryClient = useQueryClient()
  const { t } = useTranslation('classes')

  return useMutation({
    mutationFn: (data: ClassFieldsType) =>
      authInstance
        .post<ClassType>('/class', { ...data, school_id: user?.school_id })
        .then(res => res.data),
    ...noRefetch,
    onSuccess: res => {
      closeModal()
      swalAlert({ title: t('L_success_save'), html: t('L_class_added'), icon: 'success' }, 'noBtn')
      queryClient.invalidateQueries({ queryKey: [key_required.classes_list] })
    },
    onError: res => {
      closeModal()
      swalAlertError(t('L_teacher_one_class'))
    },
  })
}
