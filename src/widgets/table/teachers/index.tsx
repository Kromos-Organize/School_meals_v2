import { Dialog } from '@mui/material'

import { TeachersTable } from '@/features'
import { useBoolean } from '@/hooks'

import { useListTeachersQuery } from './model'

export const ShowTableTeachers = () => {
  const { data } = useListTeachersQuery()

  const isOpen = useBoolean(false)

  return (
    <>
      <TeachersTable teachers={data} />
      <Dialog open={isOpen.value} onClose={isOpen.setFalse}></Dialog>
    </>
  )
}
