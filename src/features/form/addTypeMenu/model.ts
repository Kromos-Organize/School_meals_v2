import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { MenuTypeDataSchema } from './config'
import { MenuTypeFieldsType } from './types'

export const useMenuTypeForm = () => {
  return useForm<MenuTypeFieldsType>({
    defaultValues: {
      type_menu: '',
    },
    resolver: yupResolver(MenuTypeDataSchema),
  })
}
