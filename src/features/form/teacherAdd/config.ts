import * as Yup from 'yup'

export const TeacherDataSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  phone: Yup.string().required(),
  fname: Yup.string().required(),
  name: Yup.string().required(),
  lname: Yup.string(),
})
