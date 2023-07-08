import { Dialog } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { FormAddTypeMenu } from '@/features'
import { useBoolean } from '@/hooks'
import { ButtonAdd } from '@/shared'

import { useCreateMenuTypeMutate } from './model'

export const AddTypeMenu = () => {
  const { t } = useTranslation('type_menus')
  const isOpen = useBoolean(false)

  const { mutate: addTypeMenu, data } = useCreateMenuTypeMutate(isOpen.setFalse)

  return (
    <>
      <ButtonAdd title={t('L_add_type_menu')} callback={isOpen.setTrue} />
      <Dialog open={isOpen.value} onClose={isOpen.setFalse}>
        <FormAddTypeMenu addTypeMenu={addTypeMenu} />
      </Dialog>
    </>
  )
}
