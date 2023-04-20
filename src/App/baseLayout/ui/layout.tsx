import { NextPage } from 'next'
import { PropsWithChildren } from 'react'

import { Header } from '@/widgets'

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
