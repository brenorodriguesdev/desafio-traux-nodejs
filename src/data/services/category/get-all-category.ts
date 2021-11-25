import { CategoryModel } from "../../../domain/models/category/category";
import { GetAllCategoryUseCase } from "../../../domain/useCases/category/get-all-category";
import { CategoryRepository } from "../../contracts/repositories/category-repository";

export class GetAllCategoryService implements GetAllCategoryUseCase {
    constructor(private readonly categoryRepository: CategoryRepository) { }
    async get(): Promise<CategoryModel[]> {
        const categories = await this.categoryRepository.getAll()
        return categories.map(category => ({
            id: category.id,
            name: category.name,
            image: category.image
        }))
    }
}