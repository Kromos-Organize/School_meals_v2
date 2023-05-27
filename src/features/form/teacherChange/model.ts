import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'

import { noRefetch, swalAlert, useAxiosAuthClient } from '@/shared'

import { TeacherChangeSchema } from './config'
import { TeacherChangeFieldType, TeacherType } from './types'

export const useTeacherChangeForm = (teacher: TeacherType) => {
  return useForm<TeacherChangeFieldType>({
    defaultValues: {
      phone: teacher.phone,
      fname: teacher.fname,
      name: teacher.name,
      lname: teacher.lname,
      birthday: teacher.birthday ?? '',
    },
    resolver: yupResolver(TeacherChangeSchema),
  })
}

export const useChangeTeacherMutate = (teacher_id: number) => {
  const authInstance = useAxiosAuthClient()
  const { t } = useTranslation('teachers')
  const { back } = useRouter()

  return useMutation({
    mutationFn: (data: TeacherChangeFieldType) =>
      authInstance.put<TeacherType>(`/user/${teacher_id}`, data).then(res => res.data),
    ...noRefetch,
    onSuccess: res => {
      swalAlert({
        title: t('L_success_save'),
        html: '',
        icon: 'success',
      }).then(res => back())
    },
  })
}
