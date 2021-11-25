import { CategoryModel } from "../../models/category/category";

export interface GetByIdCategoryUseCase {
    get: (id: number) => Promise<CategoryModel | Error>
}