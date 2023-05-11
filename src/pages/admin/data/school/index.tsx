import { NextPageWithLayout, getLayout } from '@/App'
import { SchoolPage } from '@/pagesLayer'

const AdminSchoolPage: NextPageWithLayout = () => {
  return <SchoolPage />
}

AdminSchoolPage.getLayout = getLayout

export default AdminSchoolPage
