import { AuthLayout, NextPageWithLayout } from '@/App'
import { LoginPage } from '@/pagesLayer'

const Login: NextPageWithLayout = () => {
  return <LoginPage />
}

Login.getLayout = AuthLayout
export default Login
