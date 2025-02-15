import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { FC, PropsWithChildren, forwardRef } from 'react'

import { StyledLabel } from './style'

type PropsType = {
  sx?: any
  endIcon?: any
  startIcon?: any
  variant?: any
  color?: any
}

export const Label: FC<PropsWithChildren<PropsType>> = forwardRef(
  ({ children, color = 'default', variant = 'soft', startIcon, endIcon, sx, ...other }, ref) => {
    const theme = useTheme()

    const iconStyle = {
      width: 16,
      height: 16,
      '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
    }

    return (
      <StyledLabel
        ref={ref}
        component="span"
        //@ts-ignore
        ownerState={{ color, variant }}
        sx={{
          ...(startIcon && { pl: 0.75 }),
          ...(endIcon && { pr: 0.75 }),
          ...sx,
        }}
        theme={theme}
        {...other}
      >
        {startIcon && <Box sx={{ mr: 0.75, ...iconStyle }}> {startIcon} </Box>}

        {children}

        {endIcon && <Box sx={{ ml: 0.75, ...iconStyle }}> {endIcon} </Box>}
      </StyledLabel>
    )
  }
)
