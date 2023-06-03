import * as Yup from 'yup'

export const AdminChangeSchema = Yup.object().shape({
  fname: Yup.string(),
  name: Yup.string(),
  position: Yup.string(),
  chat_number: Yup.string(),
})
