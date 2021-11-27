export const updateCategoryParamsSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer'
        },
        name: {
            type: 'string'
        },
        image: {
            type: 'string',
            format: 'binary'
        }
    },
    required: ['id', 'name', 'image']
}