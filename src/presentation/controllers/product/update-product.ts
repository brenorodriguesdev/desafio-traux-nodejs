import { CreateProductUseCase } from "../../../domain/useCases/product/create-product";
import { UpdateProductUseCase } from "../../../domain/useCases/product/update-product";
import { Validator } from "../../../validation/contracts/validator";
import { Controller } from "../../contracts/controller";
import { HttpRequest, HttpResponse } from "../../contracts/http";
import { badRequest, noContent, serverError } from "../../contracts/http-helper";

export class UpdateProductController implements Controller {
    constructor (private readonly validator: Validator, private readonly updateProductUseCase: UpdateProductUseCase) {}
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }

            const { id, idCategory, name, image } = httpRequest.body
            
            const hasError = await this.updateProductUseCase.update({
                id,
                idCategory,
                name,
                image
            })

            if (hasError instanceof Error) {
                return badRequest(hasError)
            }

            return noContent()
        } catch (error) {
            return serverError()
        }
    }
}