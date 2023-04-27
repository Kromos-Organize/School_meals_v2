import { useState } from 'react'

import { isKeyboardEvent } from './lib'
import { ChangeEvent } from './types'

export const useHiddenBlock = () => {
  const [isVisible, setIsVisible] = useState(false)

  const onDoubleClickHandler = (e: ChangeEvent): void => {
    if (isKeyboardEvent(e)) {
      if (e.altKey && e.ctrlKey) {
        setIsVisible(true)
      }
    }
  }

  return {
    isVisible,
    onDoubleClickHandler,
  }
}
