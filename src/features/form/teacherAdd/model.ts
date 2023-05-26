import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { TeacherDataSchema } from './config'
import { TeacherFieldsType } from './types'

export const useTeacherForm = () => {
  return useForm<TeacherFieldsType>({
    defaultValues: {
      email: '',
      phone: '',
      fname: '',
      name: '',
      lname: '',
    },
    resolver: yupResolver(TeacherDataSchema),
  })
}
