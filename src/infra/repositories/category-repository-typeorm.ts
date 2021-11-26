import { getRepository } from 'typeorm'
import { CategoryRepository } from '../../data/contracts/repositories/category-repository'
import { Category } from '../../data/entities/category'

export class CategoryRepositoryTypeORM implements CategoryRepository {
    async getAll (): Promise<Category[]> {
      const categoryRepository = getRepository(Category)
      return await categoryRepository.find()
    }
  
    async getById (id: number): Promise<Category> {
      const categoryRepository = getRepository(Category)
      return await categoryRepository.findOne(id)
    }
  
    async deleteById (id: number): Promise<void> {
      const categoryRepository = getRepository(Category)
      await categoryRepository.delete(id)
    }
  
    async create (category: Category): Promise<Category> {
      const categoryRepository = getRepository(Category)
      category.id = await categoryRepository.count() + 1
      return await categoryRepository.save(category)
    }
  
    async update (category: Category): Promise<void> {
      const categoryRepository = getRepository(Category)
      const { id } = category
      delete category.id
      await categoryRepository.update({ id }, category)
    }
  }