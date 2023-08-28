import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'

import { navModel, noRefetch, swalAlert, useAxiosAuthClient } from '@/shared'

import { NewPasswordSchema } from './config'
import { ConfirmPassType, NewPasswordType, RecoveryCodeType } from './types'

export const useNewPasswordForm = () => {
  return useForm<NewPasswordType & ConfirmPassType>({
    defaultValues: {
      newPassword: '',
      confirmNewPassword: '',
    },
    resolver: yupResolver(NewPasswordSchema),
  })
}

export const useNewPasswordMutate = () => {
  const authInstance = useAxiosAuthClient()
  const { t } = useTranslation('new_password')
  const { push } = useRouter()

  return useMutation({
    mutationFn: (data: RecoveryCodeType & NewPasswordType) =>
      authInstance.post(`/auth/new-password`, data).then(res => res.data),
    ...noRefetch,
    onSuccess: res => {
      swalAlert(
        {
          title: t('L_new_password_save'),
          html: '',
          icon: 'success',
        },
        'noBtn'
      ).then(res => push(navModel.MAIN_ROUTE.auth + navModel.AUTH_ROUTE.login))
    },
  })
}
