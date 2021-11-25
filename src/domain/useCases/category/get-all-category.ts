import { CategoryModel } from "../../models/category/category";

export interface GetAllCategoryUseCase {
    get: () => Promise<CategoryModel[]>
}