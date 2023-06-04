import React from 'react'

import { ChangeEvent } from './types'

export const isKeyboardEvent = (e: ChangeEvent): e is React.KeyboardEvent => {
  return (e as React.KeyboardEvent).getModifierState !== undefined
}
