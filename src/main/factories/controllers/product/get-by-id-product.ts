import { GetByIdProductService } from "../../../../data/services/product/get-by-id-product"
import { ProductRepositoryTypeORM } from "../../../../infra/repositories/product-repository-typeorm"
import { Controller } from "../../../../presentation/contracts/controller"
import { GetByIdProductController } from "../../../../presentation/controllers/product/get-by-id-product"
import { makeGetByIdProductValidator } from "../../validations/product/get-by-id-product"

export const makeGetByIdProductController = (): Controller => {
    const productRepository = new ProductRepositoryTypeORM()
    const getByIdProductService = new GetByIdProductService(productRepository)
    return new GetByIdProductController(makeGetByIdProductValidator(), getByIdProductService)
}