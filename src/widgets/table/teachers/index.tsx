import { TeachersTable } from '@/features'

import { useListTeachersQuery } from './model'

export const ShowTableTeachers = () => {
  const { data } = useListTeachersQuery()

  return <TeachersTable teachers={data} />
}
