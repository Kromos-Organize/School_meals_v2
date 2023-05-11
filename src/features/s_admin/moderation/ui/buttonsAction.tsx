import HowToRegIcon from '@mui/icons-material/HowToReg'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove'
import { Button, Tooltip } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useActivateUserMutate, useRemoveUserModerationMutate } from '../model'

type PropsType = {
  id: number
}

export const ButtonsAction: FC<PropsType> = ({ id }) => {
  const { t } = useTranslation('moderation')

  const { mutate: activateUser } = useActivateUserMutate()
  const { mutate: removeUser } = useRemoveUserModerationMutate()

  const activate = () => activateUser({ user_id: id, isActive: true })
  const remove = () => removeUser(id)

  return (
    <>
      <Tooltip key="one" title={t('L_activate')}>
        <Button color={'success'} onClick={activate}>
          <HowToRegIcon />
        </Button>
      </Tooltip>
      <Tooltip key="two" title={t('L_remove_user')}>
        <Button color={'error'} onClick={remove}>
          <PersonRemoveIcon />
        </Button>
      </Tooltip>
    </>
  )
}
