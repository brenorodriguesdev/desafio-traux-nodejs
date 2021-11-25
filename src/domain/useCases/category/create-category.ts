import { CategoryModel } from "../../models/category/category";
import { CreateCategoryModel } from "../../models/category/create-category";

export interface CreateCategoryUseCase {
    create: (data: CreateCategoryModel) => Promise<CategoryModel>
}