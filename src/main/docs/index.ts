import paths from './paths'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Desafio Traux API',
    version: '1.0.0'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login',
    description: 'APIs de Acesso',
  },
  {
    name: 'Category',
    description: 'APIs de Categorias',
  },
  {
    name: 'Product',
    description: 'APIs de Produto',
  }],
  paths,
  schemas,
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  }
}