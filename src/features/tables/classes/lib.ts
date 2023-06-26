import { sortArrayByKey } from '@/shared'

import { ClassSchoolType, ClassTypeByNumber } from './types'

export const transformClasses = (classes: ClassSchoolType[]): ClassTypeByNumber => {
  const upgradeClasses: ClassTypeByNumber = {}

  classes.sort(sortArrayByKey<ClassSchoolType>('type'))

  classes.forEach(c => {
    if (upgradeClasses[`${c.number}`]) {
      upgradeClasses[c.number].push(c)
    } else {
      upgradeClasses[c.number] = []
      upgradeClasses[c.number].push(c)
    }
  })

  return upgradeClasses
}
