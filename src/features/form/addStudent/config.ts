import * as Yup from 'yup'

export const StudentDataSchema = Yup.object().shape({
  class_id: Yup.number().required(),
  fname: Yup.string().required(),
  name: Yup.string().required(),
  lname: Yup.string(),
})
