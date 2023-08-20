import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'

import { noRefetch, swalAlert, useAxiosAuthClient } from '@/shared'

import { NewPassword } from './config'
import { NewPasswordType, RecoveryNewPasswordType } from './types'

export const useNewPasswordForm = () => {
  return useForm<RecoveryNewPasswordType & NewPasswordType>({
    defaultValues: {
      recoveryCode: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    resolver: yupResolver(NewPassword),
  })
}

export const useNewPasswordFormMutate = () => {
  const authInstance = useAxiosAuthClient()
  const { t } = useTranslation('new_password')
  const { back } = useRouter()

  return useMutation({
    mutationFn: (data: RecoveryNewPasswordType) =>
      authInstance.post<RecoveryNewPasswordType>(`/auth/new-password`, data).then(res => res.data),
    ...noRefetch,
    onSuccess: res => {
      swalAlert(
        {
          title: t('N_new_password_save'),
          html: '',
          icon: 'success',
        },
        'noBtn'
      ).then(res => back())
    },
  })
}
