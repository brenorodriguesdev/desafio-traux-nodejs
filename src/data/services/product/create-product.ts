import { CreateProductModel } from "../../../domain/models/product/create-product";
import { ProductModel } from "../../../domain/models/product/product";
import { CreateProductUseCase } from "../../../domain/useCases/product/create-product";
import { CategoryRepository } from "../../contracts/repositories/category-repository";
import { ProductRepository } from "../../contracts/repositories/product-repository";

export class CreateProductService implements CreateProductUseCase {
    constructor(private readonly categoryRepository: CategoryRepository, private readonly productRepository: ProductRepository) { }
    async create(data: CreateProductModel): Promise<ProductModel | Error> {
        const category = await this.categoryRepository.getById(data.idCategory)
        if (!category) {
            return new Error('category not found')
        }
        
        const product = await this.productRepository.create({
            category,
            name: data.name,
            image: data.image
        })

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