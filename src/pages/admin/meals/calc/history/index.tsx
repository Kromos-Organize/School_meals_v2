import { NextPageWithLayout, DashLayout } from '@/App'
import { HistoryCalcPage } from '@/pagesLayer'

const HistoryCalc: NextPageWithLayout = () => {
  return <HistoryCalcPage />
}

HistoryCalc.getLayout = DashLayout

export default HistoryCalc
