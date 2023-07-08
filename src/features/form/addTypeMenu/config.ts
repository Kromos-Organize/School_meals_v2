import * as Yup from 'yup'

export const MenuTypeDataSchema = Yup.object().shape({
  type_menu: Yup.string().required(),
})
