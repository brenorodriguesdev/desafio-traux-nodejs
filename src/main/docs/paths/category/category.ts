export const categoryPath = {
    post: {
      security: [{
        bearerAuth: []
      }],
      tags: ['Category'],
      summary: 'API para criar categoria',
      requestBody: {
        required: true,
        content: {
          'multipart/form-data': {
            schema: {
              $ref: '#/schemas/createCategoryParams'
            }
          }
        }
      },
      responses: {
        200: {
          description: 'Categoria retornada'
        }
      }
    },
    put: {
      security: [{
        bearerAuth: []
      }],
      tags: ['Category'],
      summary: 'API para atualizar categoria',
      requestBody: {
        required: true,
        content: {
          'multipart/form-data': {
            schema: {
              $ref: '#/schemas/updateCategoryParams'
            }
          }
        }
      },
      responses: {
        204: {
          description: 'Categoria alterada'
        }
      }
    },
    get: {
      security: [{
        bearerAuth: []
      }],
      tags: ['Category'],
      summary: 'API para retornar as categorias',
      responses: {
        200: {
          description: 'Categorias retornadas'
        }
      }
    }
  }