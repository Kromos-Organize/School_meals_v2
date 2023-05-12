import { TextField } from '@mui/material'
import { FC } from 'react'
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form'

type PropsType = {
  register: UseFormRegisterReturn<string>
  type?: string
  label: string
  messageError?: string
  color?: 'primary' | 'secondary'
  disabled?: boolean
  error?: boolean
  fullWidth?: boolean
  variant?: 'outlined' | 'filled' | 'standard'
  InputProps?: any //! todo изменить на тип
  className?: string
}

export const InputRegister: FC<PropsType> = ({
  register,
  messageError,
  fullWidth = true,
  className,
  ...props
}) => (
  <div className={className}>
    <TextField {...register} {...props} fullWidth={fullWidth} />
    {messageError && <p>{messageError}</p>}
  </div>
)
