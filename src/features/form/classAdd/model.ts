import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { ClassDataSchema } from './config'
import { ClassFieldsType } from './types'

export const useClassForm = () => {
  return useForm<ClassFieldsType>({
    defaultValues: {
      user_id: 0,
      number: 0,
      type: '',
    },
    resolver: yupResolver(ClassDataSchema),
  })
}
