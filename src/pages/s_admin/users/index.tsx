import { DashLayout, NextPageWithLayout } from '@/App'
import { UsersPage } from '@/pagesLayer'

const Users: NextPageWithLayout = () => {
  return <UsersPage />
}

Users.getLayout = DashLayout

export default Users
