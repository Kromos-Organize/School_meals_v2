import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { StudentDataSchema } from './config'
import { StudentFieldsType } from './types'

export const useStudentForm = () => {
  return useForm<StudentFieldsType>({
    defaultValues: {
      class_id: 0,
      fname: '',
      name: '',
      lname: '',
    },
    resolver: yupResolver(StudentDataSchema),
  })
}
