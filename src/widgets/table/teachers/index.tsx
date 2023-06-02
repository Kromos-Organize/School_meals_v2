import { Dialog } from '@mui/material'

import { TeachersTable } from '@/features'
import { useBoolean } from '@/hooks'

import { useListTeachersQuery, useRemoveTeacherMutate } from './model'

export const ShowTableTeachers = () => {
  const { data } = useListTeachersQuery()
  const { mutate: remove } = useRemoveTeacherMutate()

  const isOpen = useBoolean(false)

  return (
    <>
      <TeachersTable teachers={data} remove={remove} />
      <Dialog open={isOpen.value} onClose={isOpen.setFalse}></Dialog>
    </>
  )
}
