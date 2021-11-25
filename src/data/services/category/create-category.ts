import { CategoryModel } from "../../../domain/models/category/category";
import { CreateCategoryModel } from "../../../domain/models/category/create-category";
import { CreateCategoryUseCase } from "../../../domain/useCases/category/create-category";
import { CategoryRepository } from "../../contracts/repositories/category-repository";

export class CreateCategoryService implements CreateCategoryUseCase {
    constructor(private readonly categoryRepository: CategoryRepository) { }
    async create(data: CreateCategoryModel): Promise<CategoryModel> {
        const category = await this.categoryRepository.create(data)
        return {
            id: category.id,
            name: category.name,
            image: category.image
        }
    }
}