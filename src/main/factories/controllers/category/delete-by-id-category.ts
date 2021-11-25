import { DeleteByIdCategoryService } from "../../../../data/services/category/delete-by-id-category"
import { CategoryRepositoryTypeORM } from "../../../../infra/repositories/category-repository-typeorm"
import { Controller } from "../../../../presentation/contracts/controller"
import { DeleteByIdCategoryController } from "../../../../presentation/controllers/category/delete-by-id-product"
import { makeDeleteByIdCategoryValidator } from "../../validations/category/delete-by-id-category"

export const makeDeleteByIdCategoryController = (): Controller => {
    const categoryRepository = new CategoryRepositoryTypeORM()
    const deleteByIdCategoryService = new DeleteByIdCategoryService(categoryRepository)
    return new DeleteByIdCategoryController(makeDeleteByIdCategoryValidator(), deleteByIdCategoryService)
}