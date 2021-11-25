import { DeleteByIdProductUseCase } from "../../../domain/useCases/product/delete-by-id-product";
import { Validator } from "../../../validation/contracts/validator";
import { Controller } from "../../contracts/controller";
import { HttpRequest, HttpResponse } from "../../contracts/http";
import { badRequest, noContent, serverError } from "../../contracts/http-helper";

export class DeleteByIdProductController implements Controller {
    constructor (private readonly validator: Validator, private readonly deleteByIdProductUseCase: DeleteByIdProductUseCase) {}
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.params)
            if (error) {
                return badRequest(error)
            }

            const { id } = httpRequest.params
            
            const hasError = await this.deleteByIdProductUseCase.delete(id)
            
            if (hasError instanceof Error) {
                return badRequest(error)
            }

            return noContent()
        } catch (error) {
            return serverError()
        }
    }
}