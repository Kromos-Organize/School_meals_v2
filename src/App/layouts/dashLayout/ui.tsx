import { FC, PropsWithChildren } from 'react'

import { Header, LayoutContent, SideBar } from '@/widgets'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <SideBar />
      <LayoutContent>{children}</LayoutContent>
    </>
  )
}
