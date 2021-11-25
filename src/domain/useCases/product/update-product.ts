import { UpdateProductModel } from "../../models/product/update-product";

export interface UpdateProductUseCase {
    update: (data: UpdateProductModel) => Promise<void | Error>
}