import { DashLayout, NextPageWithLayout } from '@/App'
import { LogsPage } from '@/pagesLayer'

const Logs: NextPageWithLayout = () => {
  return <LogsPage />
}

Logs.getLayout = DashLayout

export default Logs
