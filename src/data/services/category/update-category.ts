import { UpdateCategoryModel } from "../../../domain/models/category/update-category";
import { UpdateCategoryUseCase } from "../../../domain/useCases/category/update-category";
import { CategoryRepository } from "../../contracts/repositories/category-repository";

export class UpdateCategoryService implements UpdateCategoryUseCase {
    constructor(private readonly categoryRepository: CategoryRepository) { }
    async update(data: UpdateCategoryModel): Promise<void | Error> {
        const category = await this.categoryRepository.getById(data.id)
        if (!category) {
            return new Error('category not found')
        }
        if (!data.image) {
            data.image = category.image
        }
        await this.categoryRepository.update(data)
    }
}