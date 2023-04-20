import { ReactElement } from 'react'

import { Layout } from './layout'

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
