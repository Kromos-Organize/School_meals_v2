import { Stack, Typography } from '@mui/material'
import { FC } from 'react'

type PropsType = {
  title: string
}

export const ContentHeader: FC<PropsType> = ({ title }) => {
  return (
    <Stack direction="row" justifyContent="space-between" spacing={4}>
      <Stack spacing={1}>
        <Typography variant="h4">{title}</Typography>
      </Stack>
    </Stack>
  )
}
