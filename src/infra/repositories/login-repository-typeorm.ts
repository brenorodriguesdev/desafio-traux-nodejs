import { getRepository } from 'typeorm'
import { LoginRepository } from '../../data/contracts/repositories/login-repository'
import { Login } from '../../data/entities/login'

export class LoginRepositoryTypeORM implements LoginRepository {
  
    async getByUsername (username: string): Promise<Login> {
      const loginRepository = getRepository(Login)
      return await loginRepository.findOne({ username })
    }

    async create (login: Login): Promise<Login> {
      const loginRepository = getRepository(Login)
      return await loginRepository.save(login)
    }
  }