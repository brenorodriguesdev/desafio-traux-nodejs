import { DeleteByIdProductService } from "../../../../data/services/product/delete-by-id-product"
import { ProductRepositoryTypeORM } from "../../../../infra/repositories/product-repository-typeorm"
import { Controller } from "../../../../presentation/contracts/controller"
import { DeleteByIdProductController } from "../../../../presentation/controllers/product/delete-by-id-product"
import { makeDeleteByIdProductValidator } from "../../validations/product/delete-by-id-product"

export const makeDeleteByIdProductController = (): Controller => {
    const productRepository = new ProductRepositoryTypeORM()
    const deleteByIdProductService = new DeleteByIdProductService(productRepository)
    return new DeleteByIdProductController(makeDeleteByIdProductValidator(), deleteByIdProductService)
}