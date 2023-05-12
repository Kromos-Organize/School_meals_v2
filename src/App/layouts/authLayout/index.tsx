import { ReactElement } from 'react'

import { Layout } from './ui'

export const AuthLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
