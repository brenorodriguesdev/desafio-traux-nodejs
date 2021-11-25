import { CreateCategoryService } from "../../../../data/services/category/create-category"
import { CategoryRepositoryTypeORM } from "../../../../infra/repositories/category-repository-typeorm"
import { Controller } from "../../../../presentation/contracts/controller"
import { CreateCategoryController } from "../../../../presentation/controllers/category/create-category"
import { makeCreateCategoryValidator } from "../../validations/category/create-category"

export const makeCreateCategoryController = (): Controller => {
    const categoryRepository = new CategoryRepositoryTypeORM()
    const createCategoryService = new CreateCategoryService(categoryRepository)
    return new CreateCategoryController(makeCreateCategoryValidator(), createCategoryService)
}