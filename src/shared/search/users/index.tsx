import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'
import { Card, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material'
import { ChangeEvent, FC } from 'react'

type PropsType = {
  placeholder: string
  value: string
  searchCallback: (value: string) => void
}

export const UsersSearch: FC<PropsType> = ({ placeholder, value, searchCallback }) => {
  const inputHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    searchCallback(e.currentTarget.value)
  }

  return (
    <Card sx={{ p: 2 }}>
      <OutlinedInput
        value={value}
        fullWidth
        placeholder={placeholder}
        onChange={inputHandler}
        startAdornment={
          <InputAdornment position="start">
            <SvgIcon color="action" fontSize="small">
              <MagnifyingGlassIcon />
            </SvgIcon>
          </InputAdornment>
        }
        sx={{ maxWidth: 500 }}
      />
    </Card>
  )
}
