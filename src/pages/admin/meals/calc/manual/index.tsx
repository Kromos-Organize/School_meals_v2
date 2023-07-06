import { NextPageWithLayout, DashLayout } from '@/App'
import { ManualCalcPage } from '@/pagesLayer'

const ManualCalc: NextPageWithLayout = () => {
  return <ManualCalcPage />
}

ManualCalc.getLayout = DashLayout

export default ManualCalc
