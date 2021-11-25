import { UpdateCategoryModel } from "../../models/category/update-category";

export interface UpdateCategoryUseCase {
    update: (data: UpdateCategoryModel) => Promise<void | Error>
}