import { FC, memo } from 'react'

import { checkFullNameUser, showCharsFullName } from '../lib'
import styles from '../styles.module.scss'

import { AvatarUser } from './avatarUser'

type PropsType = {
  name: string
  fname: string
  role: string
}

export const AvatarInfo: FC<PropsType> = memo(({ name, fname, role }) => {
  const fullName = checkFullNameUser(`${name} ${fname}`)

  const avatar = showCharsFullName(name, fname)

  return (
    <div className={styles.user_box}>
      <AvatarUser avatar={avatar} />
      <div className={styles.user_data}>
        <div className={styles.role}>{role}</div>
        <div className={styles.name}>{fullName}</div>
      </div>
    </div>
  )
})
