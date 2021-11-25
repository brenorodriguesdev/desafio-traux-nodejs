import { CreateProductModel } from "../../models/product/create-product";
import { ProductModel } from "../../models/product/product";

export interface CreateProductUseCase {
    create: (data: CreateProductModel) => Promise<ProductModel>
}