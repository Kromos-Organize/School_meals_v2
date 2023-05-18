import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { LoginSchema } from './config'
import { LoginFieldsType } from './types'

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
