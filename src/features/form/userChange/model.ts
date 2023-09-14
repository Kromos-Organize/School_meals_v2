import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'

import { noRefetch, swalAlert, useAxiosAuthClient } from '@/shared'

import { TeacherChangeSchema } from './config'
import { TeacherChangeFieldType, UserEmployeeType } from './types'

export const useUserChangeForm = (user: UserEmployeeType) => {
  return useForm<TeacherChangeFieldType>({
    defaultValues: {
      phone: user.phone,
      fname: user.fname,
      name: user.name,
      lname: user.lname,
      birthday: user.birthday ?? '',
    },
    resolver: yupResolver(TeacherChangeSchema),
  })
}

export const useChangeUserMutate = (user_id: number, isGoBack: boolean) => {
  const authInstance = useAxiosAuthClient()
  const { t } = useTranslation('teachers')
  const { back } = useRouter()

  return useMutation({
    mutationFn: (data: TeacherChangeFieldType) =>
      authInstance.put<UserEmployeeType>(`/user/${user_id}`, data).then(res => res.data),
    ...noRefetch,
    onSuccess: res => {
      swalAlert(
        {
          title: t('L_success_save'),
          html: '',
          icon: 'success',
        },
        'noBtn'
      ).then(res => isGoBack && back())
    },
  })
}
