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
  InputProps?: any //! todo изменить на тип
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

  return (
    <div className={className}>
      <TextField
        {...restRegister}
        {...props}
        fullWidth={fullWidth}
        InputProps={{
          ...props.InputProps,
          inputComponent: PhoneMask as any,
        }}
      />
      {messageError && <p>{messageError}</p>}
    </div>
  )
}
