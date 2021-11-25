import { GetAllCategoryService } from "../../../../data/services/category/get-all-category"
import { CategoryRepositoryTypeORM } from "../../../../infra/repositories/category-repository-typeorm"
import { Controller } from "../../../../presentation/contracts/controller"
import { GetAllCategoryController } from "../../../../presentation/controllers/category/get-all-category"

export const makeGetAllCategoryController = (): Controller => {
    const categoryRepository = new CategoryRepositoryTypeORM()
    const getAllCategoryService = new GetAllCategoryService(categoryRepository)
    return new GetAllCategoryController(getAllCategoryService)
}