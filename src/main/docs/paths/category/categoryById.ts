export const categoryByIdPath = {
    get: {
        security: [{
            bearerAuth: []
        }],
        tags: ['Category'],
        summary: 'API para retornar uma categoria',
        parameters: [{
            in: 'path',
            name: 'id',
            description: 'ID da categoria',
            required: true,
            schema: {
                type: 'integer'
            }
        }],
        responses: {
            200: {
                description: 'Categoria retornada'
            }
        }
    },
    delete: {
        security: [{
            bearerAuth: []
        }],
        tags: ['Category'],
        summary: 'API para deletar categoria',
        parameters: [{
            in: 'path',
            name: 'id',
            description: 'ID da categoria',
            required: true,
            schema: {
                type: 'integer'
            }
        }],
        responses: {
            204: {
                description: 'Categoria deletada'
            }
        }
    }
}