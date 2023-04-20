import { NextPage } from 'next'
import { PropsWithChildren } from 'react'

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return <div style={{ backgroundColor: 'red' }}>{children}</div>
}
