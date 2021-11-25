import { Product } from "../../entities/product";

export interface ProductRepository {
    getById: (id: number) => Promise<Product>
    create: (product: Product) => Promise<Product>
    update: (product: Product) => Promise<void>
    deleteById: (id: number) => Promise<void>
    getAll: () => Promise<Product[]>
}