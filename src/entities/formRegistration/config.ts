import * as Yup from 'yup'
import 'yup-phone-lite'

export const registerSchema = Yup.object().shape({
  confirmPassword: Yup.string()
    .required('Необходимо подтвердить пароль')
    .oneOf([Yup.ref('password')], 'Пароли должны совпадать'),
  password: Yup.string()
    .min(8, 'Минимальная длина пароля 8 символов')
    .max(16, 'Максимальная длина пароля 16 символов')
    .required('Необходимо ввести пароль'),
  email: Yup.string().email('Не правильный email').required('Необходимо ввести Email'),
  phone: Yup.string()
    .phone('BY', 'Не правильный телефонный номер')
    .required('Необходимо ввести номер телефона'),
})
