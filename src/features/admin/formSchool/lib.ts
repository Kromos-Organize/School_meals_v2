import { UseFormSetValue } from 'react-hook-form'

import { KeyFieldsType, SchoolFieldsType } from './types'

export const updateValuesForm = (
  schoolData: SchoolFieldsType,
  setValues: UseFormSetValue<SchoolFieldsType>
) => {
  const entries = Object.entries(schoolData)

  entries.forEach(field =>
    setValues(field[0] as KeyFieldsType, field[1], {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    })
  )
}

export const initFieldForm = (school: SchoolFieldsType) => {
  if (school) {
    return {
      name: school.name,
      region: school.region,
      area: school.area,
      city: school.city,
      street: school.street,
      homeNumber: school.homeNumber,
    }
  }

  return {
    name: '',
    region: '',
    area: '',
    city: '',
    street: '',
    homeNumber: 0,
  }
}
