export const productByIdPath = {
    get: {
        security: [{
            bearerAuth: []
        }],
        tags: ['Product'],
        summary: 'API para retornar um produto',
        parameters: [{
            in: 'path',
            name: 'id',
            description: 'ID do produto',
            required: true,
            schema: {
                type: 'integer'
            }
        }],
        responses: {
            200: {
                description: 'Produto retornado'
            }
        }
    },
    delete: {
        security: [{
            bearerAuth: []
        }],
        tags: ['Product'],
        summary: 'API para deletar produto',
        parameters: [{
            in: 'path',
            name: 'id',
            description: 'ID do produto',
            required: true,
            schema: {
                type: 'integer'
            }
        }],
        responses: {
            204: {
                description: 'Produto deletado'
            }
        }
    }
}