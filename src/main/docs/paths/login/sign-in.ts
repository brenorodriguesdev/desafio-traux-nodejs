export const signInPath = {
    post: {
      security: [{
        bearerAuth: []
      }],
      tags: ['Login'],
      summary: 'API para se autenticar',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/signInParams'
            }
          }
        }
      },
      responses: {
        200: {
          description: 'Token de acesso retornado'
        }
      }
    }
  }