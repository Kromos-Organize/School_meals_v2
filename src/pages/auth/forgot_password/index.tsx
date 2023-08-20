import { AuthLayout, NextPageWithLayout } from '@/App'
import { ForgotPasswordPage } from '@/pagesLayer'

const ForgotPassword: NextPageWithLayout = () => {
  return (
    <>
      <ForgotPasswordPage />
    </>
  )
}

ForgotPassword.getLayout = AuthLayout
export default ForgotPassword
