import { Button } from '@mui/material'
import { useRouter } from 'next/router'

import { NextPageWithLayout } from '@/App'
import { useCurrentUser } from '@/hooks'
import { navModel } from '@/shared'

const Landing: NextPageWithLayout = () => {
  const user = useCurrentUser()
  const { push } = useRouter()

  const click = () => {
    if (user) {
      user.role === 'ADMIN'
        ? push(navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.settings)
        : push(navModel.MAIN_ROUTE.admin + navModel.S_ADMIN_ROUTE.settings)
    } else {
      push(navModel.MAIN_ROUTE.auth + navModel.AUTH_ROUTE.login)
    }
  }

  return (
    <>
      <Button onClick={click}>Зайти в кабинет</Button>
    </>
  )
}

export default Landing
