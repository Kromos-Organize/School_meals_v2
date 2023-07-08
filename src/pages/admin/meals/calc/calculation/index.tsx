import { NextPageWithLayout, DashLayout } from '@/App'
import { CalculationPage } from '@/pagesLayer'

const Calculation: NextPageWithLayout = () => {
  return <CalculationPage />
}

Calculation.getLayout = DashLayout

export default Calculation
