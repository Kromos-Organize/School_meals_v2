import * as Yup from 'yup'

export const ClassDataSchema = Yup.object().shape({
  user_id: Yup.number().required(),
  number: Yup.number().required().min(1).max(11),
  type: Yup.string().required(),
})
