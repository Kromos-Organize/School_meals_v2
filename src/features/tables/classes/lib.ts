import { ClassSchoolType, ClassTypeByNumber } from './types'

const sortClasses = (prev: ClassSchoolType, next: ClassSchoolType) => {
  if (prev.type < next.type) return -1
  if (prev.type > next.type) return 1

  return 0
}

export const transformClasses = (classes: ClassSchoolType[]): ClassTypeByNumber => {
  const upgradeClasses: ClassTypeByNumber = {}

  classes.sort(sortClasses)

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
