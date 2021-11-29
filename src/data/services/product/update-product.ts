import { UpdateProductModel } from "../../../domain/models/product/update-product";
import { UpdateProductUseCase } from "../../../domain/useCases/product/update-product";
import { CategoryRepository } from "../../contracts/repositories/category-repository";
import { ProductRepository } from "../../contracts/repositories/product-repository";

export class UpdateProductService implements UpdateProductUseCase {
    constructor(private readonly categoryRepository: CategoryRepository, private readonly productRepository: ProductRepository) { }
    async update(data: UpdateProductModel): Promise<void | Error> {
        const category = await this.categoryRepository.getById(data.idCategory)
        if (!category) {
            return new Error('category not found')
        }
        
        const product = await this.categoryRepository.getById(data.id)
        if (!product) {
            return new Error('product not found')
        }
        
        if (!data.image) {
            data.image = product.image
        }
        
        await this.productRepository.update({
            id: data.id,
            category,
            name: data.name,
            image: data.image
        })

    }
}