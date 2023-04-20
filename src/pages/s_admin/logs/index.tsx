import { NextPageWithLayout } from '@/App'
import { Logs } from '@/pagesLayer'
import { getLayout } from '@/widgets'

const LogsPage: NextPageWithLayout = () => {
  return <Logs />
}

LogsPage.getLayout = getLayout

export default LogsPage
