import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'

import { setCurrentUser, useCurrentUser } from '@/entities'
import { LS, checkErrorResponse, noRetryQuery, swalAlert } from '@/shared'

import { requestLogin } from './api'
import { LoginSchema } from './config'
import { checkIsRoleSaveUser } from './lib'
import { LoginFieldsType } from './types'

export const useLoginMutate = () => {
  const setCurrent = useCurrentUser(setCurrentUser)
  const { push } = useRouter()
  const { t } = useTranslation('login')

  return useMutation({
    mutationFn: requestLogin,
    ...noRetryQuery,
    onSuccess: res => {
      LS.set('accessToken', res.data.accessToken)
      setCurrent({ id: res.data.id, role: res.data.role })
      push(checkIsRoleSaveUser(res.data))
    },
    onError: error => {
      const message = checkErrorResponse(error)

      swalAlert({ title: t('L_error_login'), html: message, icon: 'error' })
    },
  })
}

export const useLoginForm = () => {
  return useForm<LoginFieldsType>({
    defaultValues: {
      email: '',
      password: '',
      isAdminDev: false,
    },
    resolver: yupResolver(LoginSchema),
  })
}
