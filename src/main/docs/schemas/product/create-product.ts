export const createProductParamsSchema = {
    type: 'object',
    properties: {
        idCategory: {
            type: 'integer'
        },
        name: {
            type: 'string'
        },
        image: {
            type: 'string'
        }
    },
    required: ['idCategory', 'name', 'image']
}