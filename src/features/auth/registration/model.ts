import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'

import { checkErrorResponse, navModel, noRefetch, swalAlert } from '@/shared'

import { requestRegister } from './api'
import { registerSchema } from './config'
import { RegistrationFieldsType } from './types'

export const useRegisterMutate = () => {
  const { push } = useRouter()
  const { t } = useTranslation('register')

  return useMutation({
    mutationFn: requestRegister,
    ...noRefetch,
    onSuccess: res => {
      swalAlert({
        title: t('L_register_success'),
        html: t('L_register_info'),
        icon: 'success',
      }).then(() => {
        push(`${navModel.MAIN_ROUTE.auth}${navModel.AUTH_ROUTE.login}`)
      })
    },
    onError: error => {
      const message = checkErrorResponse(error)

      swalAlert({ title: t('L_error_register'), html: message, icon: 'error' })
    },
  })
}

export const useRegisterForm = () => {
  return useForm<RegistrationFieldsType>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
    },
    resolver: yupResolver(registerSchema),
  })
}
