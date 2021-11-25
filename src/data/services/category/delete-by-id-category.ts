import { DeleteByIdCategoryUseCase } from "../../../domain/useCases/category/delete-by-id-category";
import { CategoryRepository } from "../../contracts/repositories/category-repository";

export class DeleteByIdCategoryService implements DeleteByIdCategoryUseCase {
    constructor(private readonly categoryRepository: CategoryRepository) { }
    async delete(id: number): Promise<void | Error> {
        const category = await this.categoryRepository.getById(id)
        if (!category) {
            return new Error('category not found')
        }
        await this.categoryRepository.deleteById(id)
    }
}