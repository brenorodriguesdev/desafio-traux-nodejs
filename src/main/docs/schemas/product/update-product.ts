export const updateProductParamsSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer'
        },
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
    required: ['id', 'idCategory', 'name', 'image']
}