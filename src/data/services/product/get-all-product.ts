import { ProductModel } from "../../../domain/models/product/product";
import { GetAllProductUseCase } from "../../../domain/useCases/product/get-all-product";
import { ProductRepository } from "../../contracts/repositories/product-repository";

export class GetAllProductService implements GetAllProductUseCase {
    constructor(private readonly productRepository: ProductRepository) { }
    async get(): Promise<ProductModel[]> {
        const products = await this.productRepository.getAll()
        return products.map(product => ({
            id: product.id,
            category: {
                id: product.category.id,
                name: product.category.name,
                image: product.category.image
            },
            name: product.name,
            image: product.image
        }))
    }
}