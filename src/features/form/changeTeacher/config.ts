import * as Yup from 'yup'

export const TeacherChangeSchema = Yup.object().shape({
  phone: Yup.string(),
  fname: Yup.string(),
  name: Yup.string(),
  lname: Yup.string(),
  birthday: Yup.string(),
})
