import { useGetSAdminQuery } from './model'

export const FormSettingSAdmin = () => {
  const { user } = useGetSAdminQuery()

  return <>Form</>
}
