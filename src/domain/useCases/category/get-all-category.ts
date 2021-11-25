import { CategoryModel } from "../../models/category/category";

export interface GetAllCategoryUseCase {
    get: (id: number) => Promise<CategoryModel[]>
}