import * as Yup from 'yup'

export const MenuTypeDataSchema = Yup.object().shape({
  school_id: Yup.number().required(),
  type_menu: Yup.string().required(),
})
