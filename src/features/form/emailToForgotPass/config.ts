import * as Yup from 'yup'

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Не правильный email').required('Необходимо ввести Email'),
})
