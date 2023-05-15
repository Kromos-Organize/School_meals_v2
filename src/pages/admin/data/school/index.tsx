import { DashLayout, NextPageWithLayout } from '@/App'
import { SchoolPage } from '@/pagesLayer'

const AdminSchoolPage: NextPageWithLayout = () => {
  return <SchoolPage />
}

AdminSchoolPage.getLayout = DashLayout

export default AdminSchoolPage
