import { GetAllProductService } from "../../../../data/services/product/get-all-product"
import { ProductRepositoryTypeORM } from "../../../../infra/repositories/product-repository-typeorm"
import { Controller } from "../../../../presentation/contracts/controller"
import { GetAllProductController } from "../../../../presentation/controllers/product/get-all-product"

export const makeGetAllProductController = (): Controller => {
    const productRepository = new ProductRepositoryTypeORM()
    const getAllProductService = new GetAllProductService(productRepository)
    return new GetAllProductController(getAllProductService)
}