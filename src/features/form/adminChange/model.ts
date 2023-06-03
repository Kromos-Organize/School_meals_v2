import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'

import { noRefetch, swalAlert, useAxiosAuthClient } from '@/shared'

import { AdminChangeSchema } from './config'
import { AdminChangeFieldType, AdminType } from './types'

export const useAdminChangeForm = (admin: AdminType) => {
  return useForm<AdminChangeFieldType>({
    defaultValues: {
      fname: admin.fname,
      name: admin.name,
      position: admin.position,
      chat_number: admin.chat_number ?? '',
    },
    resolver: yupResolver(AdminChangeSchema),
  })
}

export const useChangeAdminMutate = (admin_id: number) => {
  const authInstance = useAxiosAuthClient()
  const { t } = useTranslation('admin_setting')
  const { back } = useRouter()

  return useMutation({
    mutationFn: (data: AdminChangeFieldType) =>
      authInstance.put<AdminType>(`/admin/${admin_id}`, data).then(res => res.data),
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
