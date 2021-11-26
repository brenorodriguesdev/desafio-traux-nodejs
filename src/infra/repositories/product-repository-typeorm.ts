import { getRepository } from 'typeorm'
import { ProductRepository } from '../../data/contracts/repositories/product-repository'
import { Product } from '../../data/entities/product'

export class ProductRepositoryTypeORM implements ProductRepository {
    async getAll (): Promise<Product[]> {
      const productRepository = getRepository(Product)
      return await productRepository.find()
    }
  
    async getById (id: number): Promise<Product> {
      const productRepository = getRepository(Product)
      return await productRepository.findOne(id)
    }
  
    async deleteById (id: number): Promise<void> {
      const productRepository = getRepository(Product)
      await productRepository.delete(id)
    }
  
    async create (product: Product): Promise<Product> {
      const productRepository = getRepository(Product)
      product.id = await productRepository.count() + 1
      return await productRepository.save(product)
    }
  
    async update (product: Product): Promise<void> {
      const productRepository = getRepository(Product)
      const { id } = product
      delete product.id
      await productRepository.update({ id }, product)
    }
  }