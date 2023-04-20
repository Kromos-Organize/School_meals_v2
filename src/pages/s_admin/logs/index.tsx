import { NextPageWithLayout, getLayout } from '@/App'
import { Logs } from '@/pagesLayer'

const LogsPage: NextPageWithLayout = () => {
  return <Logs />
}

LogsPage.getLayout = getLayout

export default LogsPage
