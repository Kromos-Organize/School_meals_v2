import * as Yup from 'yup'

export const SchoolDataSchema = Yup.object().shape({
  name: Yup.string().required(),
  region: Yup.string().required(),
  area: Yup.string().required(),
  city: Yup.string().required(),
  street: Yup.string().required(),
  homeNumber: Yup.number().min(1).max(150).required(),
})
