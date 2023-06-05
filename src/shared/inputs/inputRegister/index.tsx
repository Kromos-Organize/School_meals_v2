import { TextField } from '@mui/material'
import { FC } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

type PropsType = {
  register: UseFormRegisterReturn<string>
  defaultValue?: string
  required?: boolean
  type?: string
  label: string
  messageError?: string
  color?: 'primary' | 'secondary'
  disabled?: boolean
  error?: boolean
  fullWidth?: boolean
  margin?: 'dense' | 'none' | 'normal'
  size?: 'medium' | 'small'
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
