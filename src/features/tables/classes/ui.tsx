import { useListClassesQuery } from './model'

export const ClassesTable = () => {
  const { data } = useListClassesQuery()

  console.log(data)

  return <></>
}
