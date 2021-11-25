import { DeleteByIdProductUseCase } from "../../../domain/useCases/product/delete-by-id-product";
import { ProductRepository } from "../../contracts/repositories/product-repository";

export class DeleteByIdProductService implements DeleteByIdProductUseCase {
    constructor(private readonly productRepository: ProductRepository) { }
    async delete(id: number): Promise<void | Error> {
        const product = await this.productRepository.getById(id)
        if (!product) {
            return new Error('product not found')
        }
        await this.productRepository.deleteById(id)
    }
}