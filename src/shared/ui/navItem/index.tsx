import { Box, ButtonBase } from '@mui/material'
import { FC, ReactNode } from 'react'

import { checkLinkProps } from './lib'

type PropsType = {
  active: boolean
  disabled?: boolean
  external?: any
  icon: ReactNode
  path: string
  title: string
}

export const NavItem: FC<PropsType> = ({
  active = false,
  disabled,
  external,
  icon,
  path,
  title,
}) => {
  const linkProps = checkLinkProps(path, external)

  return (
    <li>
      <ButtonBase
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          display: 'flex',
          justifyContent: 'flex-start',
          pl: '16px',
          pr: '16px',
          py: '6px',
          textAlign: 'left',
          width: '100%',
          ...(active && {
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
          }),
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
          },
        }}
        {...linkProps}
      >
        {icon && (
          <Box
            component="span"
            sx={{
              alignItems: 'center',
              color: '#aab5c4',
              display: 'inline-flex',
              justifyContent: 'center',
              mr: 2,
              ...(active && {
                color: 'primary.main',
              }),
            }}
          >
            {icon}
          </Box>
        )}
        <Box
          component="span"
          sx={{
            color: '#aab5c4',
            flexGrow: 1,
            fontFamily: theme => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
            ...(active && {
              color: 'common.white',
            }),
            ...(disabled && {
              color: 'neutral.500',
            }),
          }}
        >
          {title}
        </Box>
      </ButtonBase>
    </li>
  )
}
