import { GetByIdCategoryService } from "../../../../data/services/category/get-by-id-category"
import { CategoryRepositoryTypeORM } from "../../../../infra/repositories/category-repository-typeorm"
import { Controller } from "../../../../presentation/contracts/controller"
import { GetByIdCategoryController } from "../../../../presentation/controllers/category/get-by-id-category"
import { makeGetByIdCategoryValidator } from "../../validations/category/get-by-id-category"

export const makeGetByIdCategoryController = (): Controller => {
    const categoryRepository = new CategoryRepositoryTypeORM()
    const getByIdCategoryService = new GetByIdCategoryService(categoryRepository)
    return new GetByIdCategoryController(makeGetByIdCategoryValidator(), getByIdCategoryService)
}