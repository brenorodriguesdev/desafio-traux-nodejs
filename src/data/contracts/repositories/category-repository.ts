import { Category } from "../../entities/category";

export interface CategoryRepository {
    getById: (id: number) => Promise<Category>
    create: (category: Category) => Promise<Category>
    update: (category: Category) => Promise<void>
    deleteById: (id: number) => Promise<Category>
    getAll: () => Promise<Category[]>
}