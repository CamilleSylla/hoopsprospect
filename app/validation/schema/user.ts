import * as yup from 'yup'

export const UserCreateValidation = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    date_of_birth: yup.date().required()
})
export type UserCreateValidationType = yup.InferType<typeof UserCreateValidation>