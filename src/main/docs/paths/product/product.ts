export const productPath = {
    post: {
      security: [{
        bearerAuth: []
      }],
      tags: ['Product'],
      summary: 'API para criar produto',
      requestBody: {
        required: true,
        content: {
          'multipart/form-data': {
            schema: {
              $ref: '#/schemas/createProductParams'
            }
          }
        }
      },
      responses: {
        200: {
          description: 'Produto retornado'
        }
      }
    },
    put: {
      security: [{
        bearerAuth: []
      }],
      tags: ['Product'],
      summary: 'API para atualizar produto',
      requestBody: {
        required: true,
        content: {
          'multipart/form-data': {
            schema: {
              $ref: '#/schemas/updateProductParams'
            }
          }
        }
      },
      responses: {
        204: {
          description: 'Produto alterado'
        }
      }
    },
    get: {
      security: [{
        bearerAuth: []
      }],
      tags: ['Product'],
      summary: 'API para retornar as produtos',
      responses: {
        200: {
          description: 'Produtos retornados'
        }
      }
    }
  }