import { Dialog } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { FormAddStudent, useListClassesQuery } from '@/features'
import { useBoolean } from '@/hooks'
import { ButtonAdd } from '@/shared'

import { transformClasses } from './lib'
import { useCreateStudentMutate } from './model'

export const AddStudent = () => {
  const { t } = useTranslation('students')
  const isOpen = useBoolean(false)

  const { data } = useListClassesQuery()
  const { mutate: addStudent } = useCreateStudentMutate(isOpen.setFalse)

  const classes = transformClasses(data)

  return (
    <>
      <ButtonAdd title={t('L_add_student')} callback={isOpen.setTrue} />
      <Dialog open={isOpen.value} onClose={isOpen.setFalse}>
        <FormAddStudent classes={classes} addStudent={addStudent} />
      </Dialog>
    </>
  )
}
