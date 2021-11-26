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
            type: 'string'
        }
    },
    required: ['id', 'name', 'image']
}