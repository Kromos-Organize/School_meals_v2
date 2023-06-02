import { FC, forwardRef } from 'react'
import { IMaskInput } from 'react-imask'

type MaskProps = {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

export const PhoneMask: FC<MaskProps> = forwardRef<HTMLElement, MaskProps>((props, ref) => {
  const { onChange, ...other } = props

  const change = (value: string, mask: any) => {
    mask.updateValue(value)
  }

  return (
    <IMaskInput
      {...other}
      mask={'+{375}-(00)-000-00-00'}
      blocks={{
        '00': {
          mask: '00',
          validate: (value: string) => /[1-9]/.test(value),
        },
      }}
      inputRef={ref}
      unmask={'typed'}
      onAccept={change}
      overwrite
    />
  )
})
