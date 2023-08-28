import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'

import { noRefetch, swalAlert, useAxiosAuthClient } from '@/shared'

import { ForgotPasswordSchema } from './config'
import { RecoveryPasswordType } from './types'

export const useForgotPasswordForm = () => {
  return useForm<RecoveryPasswordType>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(ForgotPasswordSchema),
  })
}
export const useForgotPasswordMutate = () => {
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
          title: t('L_send_email'),
          html: '',
          icon: 'success',
        },
        'noBtn'
      )
    },
  })
}
