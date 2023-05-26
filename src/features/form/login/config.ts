import * as Yup from 'yup'

export const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Минимальная длина пароля 8 символов')
    .max(16, 'Максимальная длина пароля 16 символов')
    .required('Необходимо ввести пароль'),
  email: Yup.string().email('Не правильный email').required('Необходимо ввести Email'),
})
