import { yupResolver } from '@hookform/resolvers/yup'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'

import { useCurrentUser } from '@/hooks'
import { noRefetch, swalAlert, useAxiosAuthClient } from '@/shared'

import { SchoolDataSchema } from './config'
import { initFieldForm } from './lib'
import { SchoolFieldsType } from './types'

export const useSchoolForm = (school: SchoolFieldsType | null) => {
  return useForm<SchoolFieldsType>({
    defaultValues: initFieldForm(school),
    resolver: yupResolver(SchoolDataSchema),
  })
}

export const useCreateSchoolMutate = () => {
  const authInstance = useAxiosAuthClient()
  const user = useCurrentUser()
  const { t } = useTranslation('school')

  return useMutation({
    mutationFn: (data: SchoolFieldsType) => {
      return authInstance.post<SchoolFieldsType>(`/school`, data).then(res => res.data)
    },
    ...noRefetch,
    onSuccess: res => {
      signIn('auth_update_session', {
        email: user?.email,
        accessToken: user?.accessToken,
        redirect: false,
      }).then(() => {
        swalAlert({
          title: t('L_success'),
          html: `${t('L_title')} "${res.name}" ${t('L_info_success_create')}`,
          icon: 'success',
        })
      })
    },
  })
}

export const useUpdateSchoolMutate = () => {
  const authInstance = useAxiosAuthClient()
  const user = useCurrentUser()
  const { t } = useTranslation('school')

  return useMutation({
    mutationFn: (data: SchoolFieldsType) => {
      return authInstance
        .put<SchoolFieldsType>(`/school/${user?.school_id}`, data)
        .then(res => res.data)
    },
    ...noRefetch,
    onSuccess: res => {
      swalAlert({
        title: t('L_success'),
        html: t('L_data_update'),
        icon: 'success',
      })
    },
  })
}
