import { NextPage } from 'next'
import { PropsWithChildren } from 'react'

import { Header, SideBar, MainSection } from '@/widgets'

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <SideBar />
      <MainSection>{children}</MainSection>
    </>
  )
}
