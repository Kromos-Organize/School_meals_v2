import { AuthLayout, NextPageWithLayout } from '@/App'
import { RegistrationPage } from '@/pagesLayer'

const Registration: NextPageWithLayout = () => {
  return <RegistrationPage />
}

Registration.getLayout = AuthLayout

export default Registration
