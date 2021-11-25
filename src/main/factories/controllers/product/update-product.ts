import { UpdateProductService } from "../../../../data/services/product/update-product"
import { CategoryRepositoryTypeORM } from "../../../../infra/repositories/category-repository-typeorm"
import { ProductRepositoryTypeORM } from "../../../../infra/repositories/product-repository-typeorm"
import { Controller } from "../../../../presentation/contracts/controller"
import { UpdateProductController } from "../../../../presentation/controllers/product/update-product"
import { makeUpdateProductValidator } from "../../validations/product/update-product"

export const makeUpdateProductController = (): Controller => {
    const categoryRepository = new CategoryRepositoryTypeORM()
    const productRepository = new ProductRepositoryTypeORM()
    const updateProductService = new UpdateProductService(categoryRepository, productRepository)
    return new UpdateProductController(makeUpdateProductValidator(), updateProductService)
}