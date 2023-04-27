import { Button, CircularProgress } from '@mui/material'
import Link from 'next/link'
import { FC, PropsWithChildren, memo } from 'react'

type PropsType = {
  href: string
  size?: 'small' | 'medium' | 'large'
  variant?: 'text' | 'contained' | 'outlined'
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  fullWidth?: boolean
}

export const BtnLink: FC<PropsWithChildren<PropsType>> = memo(
  ({ href, size, variant, color, fullWidth, children }) => {
    return (
      <Link href={href}>
        <Button
          size={size ?? 'medium'}
          variant={variant ?? 'contained'}
          color={color ?? 'inherit'}
          fullWidth={fullWidth ?? true}
        >
          {children}
        </Button>
      </Link>
    )
  }
)
