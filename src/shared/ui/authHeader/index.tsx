import { Stack, Typography, Link } from '@mui/material'
import { FC } from 'react'

type PropsType = {
  title: string
  text: string
  textLink: string
  href: string
}

export const AuthHeader: FC<PropsType> = ({ title, text, textLink, href }) => {
  return (
    <Stack spacing={1} sx={{ mb: 3 }}>
      <Typography variant="h4">{title}</Typography>
      <Typography color="text.secondary" variant="body2">
        {text}
        &nbsp;
        <Link href={href} underline="hover" variant="subtitle2">
          {textLink}
        </Link>
      </Typography>
    </Stack>
  )
}
