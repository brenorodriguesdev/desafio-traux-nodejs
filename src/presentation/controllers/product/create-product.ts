import { CreateProductUseCase } from "../../../domain/useCases/product/create-product";
import { Validator } from "../../../validation/contracts/validator";
import { Controller } from "../../contracts/controller";
import { HttpRequest, HttpResponse } from "../../contracts/http";
import { badRequest, ok, serverError } from "../../contracts/http-helper";

export class CreateProductController implements Controller {
    constructor (private readonly validator: Validator, private readonly createProductUseCase: CreateProductUseCase) {}
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }

            const { idCategory, name, image } = httpRequest.body
            
            const product = await this.createProductUseCase.create({
                idCategory,
                name,
                image
            })

            if (product instanceof Error) {
                return badRequest(error)
            }

            return ok(product)
        } catch (error) {
            return serverError()
        }
    }
}