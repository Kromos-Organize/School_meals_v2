import { FC } from 'react'

import { UserType } from '../../types'

import { ActivatedButton } from './activated'
import { BlockedButton } from './blocked'
import { SignInCabinet } from './signInCabinet'

type PropsType = {
  user: UserType
  userActivated: (isActive: boolean) => void
  blocked: () => void
  unlocked: () => void
  sign: () => void
}

export const ButtonsAction: FC<PropsType> = ({ user, userActivated, blocked, unlocked, sign }) => {
  return (
    <>
      <ActivatedButton isActive={user.isActive} userActivated={userActivated} />
      <BlockedButton isBlock={user.is_block} blocked={blocked} unlocked={unlocked} />
      <SignInCabinet sign={sign} />
    </>
  )
}
