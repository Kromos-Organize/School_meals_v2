import { useTranslation } from 'react-i18next'
import { useMutation, useQueryClient } from 'react-query'

import { MenuTypeFieldsType, MenuType } from '@/features'
import { useCurrentUser } from '@/hooks'
import { noRefetch, swalAlert, swalAlertError, useAxiosAuthClient } from '@/shared'

export const useCreateMenuTypeMutate = (closeModal: () => void) => {
  const authInstance = useAxiosAuthClient()
  const user = useCurrentUser()
  const queryClient = useQueryClient()
  const { t } = useTranslation('type_menus')

  return useMutation({
    mutationFn: (data: MenuTypeFieldsType) =>
      authInstance
        .post<MenuType>('/type-menu', { ...data, school_id: user?.school_id })
        .then(res => res.data),
    ...noRefetch,
    onSuccess: res => {
      closeModal()
      swalAlert(
        { title: t('L_success_save'), html: t('L_menu_type_added'), icon: 'success' },
        'noBtn'
      )
      queryClient.invalidateQueries({ queryKey: ['type_menus_list'] })
    },
    onError: res => {
      closeModal()
      swalAlertError(t('L_menu_type_fail'))
    },
  })
}
