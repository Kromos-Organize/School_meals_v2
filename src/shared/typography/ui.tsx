import Box from '@mui/material/Box'
import { Variant } from '@mui/material/styles/createTypography'
import Typography from '@mui/material/Typography'
import { FC, memo } from 'react'

type PropsType = {
  variant?: Variant
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right'
  gutterBottom?: boolean
  paragraph?: boolean
  text: string
}

export const CustomText: FC<PropsType> = memo(
  ({ text, variant, align, gutterBottom, paragraph }) => (
    <Box>
      <Typography
        variant={variant ? variant : 'h6'}
        align={align ?? 'center'}
        gutterBottom={gutterBottom ?? false}
        paragraph={paragraph ?? false}
      >
        {text}
      </Typography>
    </Box>
  )
)
