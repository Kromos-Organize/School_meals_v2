import { FC, forwardRef } from 'react'
import { IMaskInput } from 'react-imask'

type MaskProps = {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

export const PhoneMask: FC<MaskProps> = forwardRef<HTMLElement, MaskProps>((props, ref) => {
  const { onChange, ...other } = props

  const change = (value: string, mask: any) => {
    debugger
    mask.updateValue(value)
    onChange({ target: { name: props.name, value } })
  }

  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={change}
      overwrite
    />
  )
})
