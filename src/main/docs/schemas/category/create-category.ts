export const createCategoryParamsSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        image: {
            type: 'string',
            format: 'binary'
        }
    },
    required: ['name', 'image']
}