import { AuthLayout, NextPageWithLayout } from '@/App'
import { NewPasswordPage } from '@/pagesLayer'

const NewPassword: NextPageWithLayout = () => {
  return (
    <>
      <NewPasswordPage />
    </>
  )
}

NewPassword.getLayout = AuthLayout
export default NewPassword
