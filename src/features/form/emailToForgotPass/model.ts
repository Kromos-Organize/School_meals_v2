import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'

import { noRefetch, swalAlert, useAxiosAuthClient } from '@/shared'

import { ForgotPassword } from './config'
import { RecoveryPasswordType } from './types'

export const useForgotPasswordForm = () => {
  return useForm<RecoveryPasswordType>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(ForgotPassword),
  })
}
export const useForgotPasswordFormMutate = () => {
  const authInstance = useAxiosAuthClient()
  const { t } = useTranslation('forgot_password')

  return useMutation({
    mutationFn: (data: RecoveryPasswordType) =>
      authInstance
        .post<RecoveryPasswordType>(`/auth/recovery-password`, data)
        .then(res => res.data),
    ...noRefetch,
    onSuccess: res => {
      swalAlert(
        {
          title: t('F_forgot_password_save'),
          html: '',
          icon: 'success',
        },
        'noBtn'
      )
    },
  })
}
