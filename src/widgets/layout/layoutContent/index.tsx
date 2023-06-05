import { styled } from '@mui/material/styles'
import { FC, PropsWithChildren } from 'react'

const SIDE_NAV_WIDTH = 280

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH,
  },
}))

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%',
})

export const LayoutContent: FC<PropsWithChildren> = ({ children }) => (
  <LayoutRoot>
    <LayoutContainer>{children}</LayoutContainer>
  </LayoutRoot>
)
