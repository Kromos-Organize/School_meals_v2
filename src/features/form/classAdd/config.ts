import * as Yup from 'yup'

export const ClassDataSchema = Yup.object().shape({
  user_id: Yup.number().required(),
  number: Yup.number().required(),
  type: Yup.string().required(),
})
