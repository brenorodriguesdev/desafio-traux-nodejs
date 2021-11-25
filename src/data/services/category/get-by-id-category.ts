import { CategoryModel } from "../../../domain/models/category/category";
import { GetByIdCategoryUseCase } from "../../../domain/useCases/category/get-by-id-category";
import { CategoryRepository } from "../../contracts/repositories/category-repository";

export class GetByIdCategoryService implements GetByIdCategoryUseCase {
    constructor(private readonly categoryRepository: CategoryRepository) { }
    async get(id: number): Promise<CategoryModel | Error> {
        const category = await this.categoryRepository.getById(id)
        if (!category) {
            return new Error('category not found')
        }
        return {
            id: category.id,
            name: category.name,
            image: category.image
        }
    }
}