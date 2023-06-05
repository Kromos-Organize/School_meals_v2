import { Dialog } from '@mui/material'

import { TeachersTable } from '@/features'
import { useBoolean } from '@/hooks'

export const ShowTableTeachers = () => {
  const isOpen = useBoolean(false)

  return (
    <>
      <TeachersTable />
      <Dialog open={isOpen.value} onClose={isOpen.setFalse}></Dialog>
    </>
  )
}
