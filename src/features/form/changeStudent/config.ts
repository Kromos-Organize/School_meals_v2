import * as Yup from 'yup'

export const StudentChangeSchema = Yup.object().shape({
  fname: Yup.string().required(),
  name: Yup.string().required(),
  lname: Yup.string(),
  birthday: Yup.string(),
})
