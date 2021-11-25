import { ProductModel } from "../../models/product/product";

export interface GetAllProductUseCase {
    get: () => Promise<ProductModel[]>
}