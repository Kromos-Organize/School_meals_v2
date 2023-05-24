import { Dialog } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { FormTeacher } from '@/features'
import { useBoolean } from '@/hooks'
import { ButtonAdd } from '@/shared'

import { useCreateTeacherMutate } from './model'

export const AddTeacher = () => {
  const { t } = useTranslation('teachers')
  const isOpen = useBoolean(false)
  const { mutate: addTeacher } = useCreateTeacherMutate(isOpen.setFalse)

  return (
    <>
      <ButtonAdd title={t('L_add_teacher')} callback={isOpen.setTrue} />
      <Dialog open={isOpen.value} onClose={isOpen.setFalse}>
        <FormTeacher addTeacher={addTeacher} />
      </Dialog>
    </>
  )
}
