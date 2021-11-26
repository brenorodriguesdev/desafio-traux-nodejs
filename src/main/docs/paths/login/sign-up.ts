export const signUpPath = {
    post: {
      tags: ['Login'],
      summary: 'API para criar acesso',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/signUpParams'
            }
          }
        }
      },
      responses: {
        201: {
          description: 'Acesso criado'
        }
      }
    }
  }