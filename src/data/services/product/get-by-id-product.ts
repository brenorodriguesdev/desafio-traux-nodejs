import { ProductModel } from "../../../domain/models/product/product";
import { GetByIdProductUseCase } from "../../../domain/useCases/product/get-by-id-product";
import { ProductRepository } from "../../contracts/repositories/product-repository";

export class GetByIdProductService implements GetByIdProductUseCase {
    constructor(private readonly productRepository: ProductRepository) { }
    async get(id: number): Promise<ProductModel | Error> {
        const product = await this.productRepository.getById(id)
        if (!product) {
            return new Error('product not found')
        }
        return {
            id: product.id,
            category: {
                id: product.category.id,
                name: product.category.name,
                image: product.category.image
            },
            name: product.name,
            image: product.image
        }
    }
}