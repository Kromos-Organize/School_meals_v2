import * as Yup from 'yup'

export const ForgotPassword = Yup.object().shape({
  email: Yup.string().email('Не правильный email').required('Необходимо ввести Email'),
})
