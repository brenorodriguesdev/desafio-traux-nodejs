export const signUpParamsSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        username: {
            type: 'string'
        },
        password: {
            type: 'string'
        }
    },
    required: ['name', 'username', 'password']
}