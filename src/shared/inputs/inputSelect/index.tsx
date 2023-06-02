import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { FC } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { MenuProps } from './config'

export type ValueSelectType = {
  value: string
  label: string
}

type PropsType = {
  register: UseFormRegisterReturn<string>
  list: ValueSelectType[]
  defaultValue?: string
  required?: boolean
  label: string
  messageError?: string
  color?: 'primary' | 'secondary'
  disabled?: boolean
  error?: boolean
  fullWidth?: boolean
  size?: 'medium' | 'small'
  variant?: 'outlined' | 'filled' | 'standard'
  InputProps?: any //! todo изменить на тип
  className?: string
}

export const InputSelect: FC<PropsType> = ({
  register,
  list,
  messageError,
  fullWidth = true,
  className,
  ...props
}) => {
  return (
    <div>
      <FormControl fullWidth variant="filled">
        <InputLabel id={`${Date.now()}2`}>{props.label}</InputLabel>
        <Select
          {...register}
          {...props}
          MenuProps={MenuProps}
          id={`${Date.now()}1`}
          labelId={`${Date.now()}2`}
        >
          {list.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {messageError && <p>{messageError}</p>}
    </div>
  )
}
