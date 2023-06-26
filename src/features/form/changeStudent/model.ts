import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'

import { noRefetch, swalAlert, useAxiosAuthClient } from '@/shared'

import { StudentChangeSchema } from './config'
import { StudentChangeFieldsType, StudentType } from './types'

export const useStudentChangeForm = (student: StudentType) => {
  return useForm<StudentChangeFieldsType>({
    defaultValues: {
      fname: student.fname,
      name: student.name,
      lname: student.lname,
      birthday: student.birthday ?? '',
    },
    resolver: yupResolver(StudentChangeSchema),
  })
}

export const useChangeStudentMutate = (student_id: number) => {
  const authInstance = useAxiosAuthClient()
  const { t } = useTranslation('students')
  const { back } = useRouter()

  return useMutation({
    mutationFn: (data: StudentChangeFieldsType) =>
      authInstance.put<StudentType>(`/student/${student_id}`, data).then(res => res.data),
    ...noRefetch,
    onSuccess: res => {
      swalAlert(
        {
          title: t('L_success_save'),
          html: '',
          icon: 'success',
        },
        'noBtn'
      ).then(() => back())
    },
  })
}
