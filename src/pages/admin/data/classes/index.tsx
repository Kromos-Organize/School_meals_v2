import { DashLayout, NextPageWithLayout } from '@/App'
import { ClassesPage } from '@/pagesLayer'

const Classes: NextPageWithLayout = () => {
  return <ClassesPage />
}

Classes.getLayout = DashLayout

export default Classes
