import { MouseEvent, FC, KeyboardEvent, PropsWithChildren, memo } from 'react'

import { useHiddenBlock } from '@/hooks'

import styles from './styles.module.scss'

type PropsType = {
  className?: string
}

export const HiddenBlock: FC<PropsWithChildren<PropsType>> = memo(({ className, children }) => {
  const { isVisible, onClickHandler } = useHiddenBlock()

  return (
    <>
      {isVisible ? (
        <>{children}</>
      ) : (
        <div onClick={onClickHandler} className={`${className} ${styles.hiddenBlock}`} />
      )}
    </>
  )
})
