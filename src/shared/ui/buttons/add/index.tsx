import { UserPlusIcon } from '@heroicons/react/24/solid'
import { Button, SvgIcon } from '@mui/material'
import { FC } from 'react'

type PropsType = {
  title: string
  callback: () => void
}

export const ButtonAdd: FC<PropsType> = ({ title, callback }) => {
  return (
    <Button
      onClick={callback}
      startIcon={
        <SvgIcon>
          <UserPlusIcon />
        </SvgIcon>
      }
      variant="contained"
    >
      {title}
    </Button>
  )
}
