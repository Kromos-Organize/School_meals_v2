import { Dialog } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { FormAddClass } from '@/features'
import { useBoolean } from '@/hooks'
import { ButtonAdd } from '@/shared'

import { useCreateClassMutate } from './model'

export const AddClass = () => {
  const { t } = useTranslation('classes')
  const isOpen = useBoolean(false)
  const { mutate: addClass } = useCreateClassMutate(isOpen.setFalse)

  return (
    <>
      <ButtonAdd title={t('L_add_class')} callback={isOpen.setTrue} />
      <Dialog open={isOpen.value} onClose={isOpen.setFalse}>
        <FormAddClass addClass={addClass} />
      </Dialog>
    </>
  )
}
