import { Input, TextField } from '@material-ui/core'
import { FC } from 'react'
import { Controller } from 'react-hook-form'

type PropsType = {
  name: string
  label: string
  control: any //! todo изменить на тип
  color?: 'primary' | 'secondary'
  disabled?: boolean
  error?: boolean
  fullWidth?: boolean
  variant?: 'outlined' | 'filled' | 'standard'
  InputProps?: any //! todo изменить на тип
  className?: string
}

export const InputControl: FC<PropsType> = ({ name, control, ...restProps }) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => <TextField {...field} {...restProps} />}
  />
)
