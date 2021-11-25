import { ProductModel } from "../../models/product/product";

export interface GetByIdProductUseCase {
    get: (id: number) => Promise<ProductModel | Error>
}