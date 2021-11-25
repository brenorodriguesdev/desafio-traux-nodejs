import { CreateProductService } from "../../../../data/services/product/create-product"
import { CategoryRepositoryTypeORM } from "../../../../infra/repositories/category-repository-typeorm"
import { ProductRepositoryTypeORM } from "../../../../infra/repositories/product-repository-typeorm"
import { Controller } from "../../../../presentation/contracts/controller"
import { CreateProductController } from "../../../../presentation/controllers/product/create-product"
import { makeCreateProductValidator } from "../../validations/product/create-product"

export const makeCreateProductController = (): Controller => {
    const categoryRepository = new CategoryRepositoryTypeORM()
    const productRepository = new ProductRepositoryTypeORM()
    const createProductService = new CreateProductService(categoryRepository, productRepository)
    return new CreateProductController(makeCreateProductValidator(), createProductService)
}