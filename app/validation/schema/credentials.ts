import * as yup from 'yup'

export const CredentialValidation = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().min(6).required(),
})
export type CredentialValidationType = yup.InferType<typeof CredentialValidation>