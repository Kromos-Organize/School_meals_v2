import * as Yup from 'yup'

export const NewPassword = Yup.object().shape({
  newPassword: Yup.string().required('Необходимо ввести пароль'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), undefined], 'Пароли должны совпадать')
    .required('Необходимо подтвердить пароль'),
})
