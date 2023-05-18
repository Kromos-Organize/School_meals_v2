import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import { getRole, useCurrentUser } from '@/entities'
import { navModel, useRefreshToken } from '@/shared'

const cabinetsRoute = {
  S_ADMIN: navModel.MAIN_ROUTE.s_admin + navModel.S_ADMIN_ROUTE.settings,
  ADMIN: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.settings,
}

export const WithAccessCheck: FC<PropsWithChildren> = ({ children }) => {
  const { data } = useRefreshToken()
  const { asPath, push } = useRouter()

  if (asPath !== '/' && !asPath.includes('/auth')) {
    // if (!asPath.includes(data?.data.role.toLowerCase())) {
    //   push(cabinetsRoute[currentRole])
    // }
  }

  return <>{children}</>
}
