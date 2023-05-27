import { TextField } from '@mui/material'
import { FC } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { PhoneMask } from './phoneMask'

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
  className?: string
}

export const InputPhone: FC<PropsType> = ({
  register,
  messageError,
  fullWidth = true,
  className,
  ...props
}) => {
  const { onChange, ...restRegister } = register

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event)
  }

  return (
    <div className={className}>
      <TextField
        {...restRegister}
        {...props}
        onChange={handleChange}
        fullWidth={fullWidth}
        InputProps={{
          inputComponent: PhoneMask as any,
        }}
      />
      {messageError && <p>{messageError}</p>}
    </div>
  )
}
