import { UpdateCategoryService } from "../../../../data/services/category/update-category"
import { CategoryRepositoryTypeORM } from "../../../../infra/repositories/category-repository-typeorm"
import { Controller } from "../../../../presentation/contracts/controller"
import { UpdateCategoryController } from "../../../../presentation/controllers/category/update-category"
import { makeUpdateCategoryValidator } from "../../validations/category/update-category"

export const makeUpdateCategoryController = (): Controller => {
    const categoryRepository = new CategoryRepositoryTypeORM()
    const updateCategoryService = new UpdateCategoryService(categoryRepository)
    return new UpdateCategoryController(makeUpdateCategoryValidator(), updateCategoryService)
}