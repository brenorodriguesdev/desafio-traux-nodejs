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
            type: 'string',
            format: 'binary'
        }
    },
    required: ['idCategory', 'name', 'image']
}