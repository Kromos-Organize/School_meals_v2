import { Dialog } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { FormAddClass, useListTeachersQuery } from '@/features'
import { useBoolean } from '@/hooks'
import { ButtonAdd, ValueSelectType } from '@/shared'

import { transformTeachers } from './lib'
import { useCreateClassMutate } from './model'

export const AddClass = () => {
  const { t } = useTranslation('classes')
  const isOpen = useBoolean(false)

  const { data } = useListTeachersQuery()
  const { mutate: addClass } = useCreateClassMutate(isOpen.setFalse)

  const teachers = transformTeachers(data)

  return (
    <>
      <ButtonAdd title={t('L_add_class')} callback={isOpen.setTrue} />
      <Dialog open={isOpen.value} onClose={isOpen.setFalse}>
        <FormAddClass addClass={addClass} teachers={teachers} />
      </Dialog>
    </>
  )
}
