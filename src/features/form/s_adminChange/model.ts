import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'

import { noRefetch, swalAlert, useAxiosAuthClient } from '@/shared'

import { S_AdminChangeSchema } from './config'
import { S_AdminChangeFieldType, S_AdminType } from './types'

export const useS_AdminChangeForm = (admin: S_AdminType) => {
  return useForm<S_AdminChangeFieldType>({
    defaultValues: {
      fname: admin.fname,
      name: admin.name,
      position: admin.position,
      chat_number: admin.chat_number ?? '',
    },
    resolver: yupResolver(S_AdminChangeSchema),
  })
}

export const useChangeS_AdminMutate = (admin_id: number) => {
  const authInstance = useAxiosAuthClient()
  const { t } = useTranslation('admin_setting')
  const { back } = useRouter()

  return useMutation({
    mutationFn: (data: S_AdminChangeFieldType) =>
      authInstance.put<S_AdminType>(`/admin/${admin_id}`, data).then(res => res.data),
    ...noRefetch,
    onSuccess: res => {
      swalAlert(
        {
          title: t('L_success_save'),
          html: '',
          icon: 'success',
        },
        'noBtn'
      ).then(res => back())
    },
  })
}
