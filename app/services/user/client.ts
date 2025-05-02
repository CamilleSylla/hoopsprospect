import {
    UserCreateValidationType
} from '../../validation/schema/user'
export async function createUser(payload: UserCreateValidationType) {
    const req = await fetch('/api/user/create', {
        method: 'POST',
        body: JSON.stringify({ ...payload, date_of_birth: new Date(payload.date_of_birth + 'T00:00:00Z') })
    })
    return payload
} 