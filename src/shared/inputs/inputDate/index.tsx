import { TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { FC } from 'react'
import { Controller } from 'react-hook-form'

type PropsType = {
  control: any
  name: string
  defaultValue: string | null | undefined
  required?: boolean
  messageError?: string
}

export const InputDates: FC<PropsType> = ({
  control,
  name,
  messageError,
  defaultValue,
  required,
}) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      rules={{ required: !!required }}
      control={control}
      render={({ field }) => (
        <>
          <DatePicker
            label={'Выберите дату'}
            views={['day', 'month', 'year']}
            renderInput={params => <TextField {...params} />}
            {...field}
          />
          {messageError && <p>{messageError}</p>}
        </>
      )}
    />
  )
}
