export const createCategoryParamsSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        image: {
            type: 'string'
        }
    },
    required: ['name', 'image']
}