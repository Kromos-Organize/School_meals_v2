import { useState } from 'react'

//Этот хук React предоставляет copy метод для сохранения строки в буфере обмена и скопированного значения (по умолчанию: null).
// Если что-то не работает, в консоли выводится предупреждение и значение будет null.

type CopiedValue = string | null
type CopyFn = (text: string) => Promise<boolean> // Return success

export function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null)

  const copy: CopyFn = async text => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')

      return false
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)

      return true
    } catch (error) {
      console.warn('Copy failed', error)
      setCopiedText(null)

      return false
    }
  }

  return [copiedText, copy]
}
