import { DeleteByIdProductUseCase } from "../../../domain/useCases/product/delete-by-id-product";
import { GetByIdProductUseCase } from "../../../domain/useCases/product/get-by-id-product";
import { Validator } from "../../../validation/contracts/validator";
import { Controller } from "../../contracts/controller";
import { HttpRequest, HttpResponse } from "../../contracts/http";
import { badRequest, noContent, notFound, ok, serverError } from "../../contracts/http-helper";

export class GetByIdProductController implements Controller {
    constructor (private readonly validator: Validator, private readonly getByIdProductUseCase: GetByIdProductUseCase) {}
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.params)
            if (error) {
                return badRequest(error)
            }

            const { id } = httpRequest.params
            
            const product = await this.getByIdProductUseCase.get(id)
            
            if (product instanceof Error) {
                return notFound()
            }

            return ok(product)
        } catch (error) {
            return serverError()
        }
    }
}