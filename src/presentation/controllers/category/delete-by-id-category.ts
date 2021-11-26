import { DeleteByIdCategoryUseCase } from "../../../domain/useCases/category/delete-by-id-category";
import { Validator } from "../../../validation/contracts/validator";
import { Controller } from "../../contracts/controller";
import { HttpRequest, HttpResponse } from "../../contracts/http";
import { badRequest, noContent, serverError } from "../../contracts/http-helper";

export class DeleteByIdCategoryController implements Controller {
    constructor (private readonly validator: Validator, private readonly deleteByIdCategoryUseCase: DeleteByIdCategoryUseCase) {}
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.params)
            if (error) {
                return badRequest(error)
            }

            const { id } = httpRequest.params
                        
            const hasError = await this.deleteByIdCategoryUseCase.delete(id)
            
            if (hasError instanceof Error) {
                return badRequest(error)
            }


            return noContent()
        } catch (error) {
            return serverError()
        }
    }
}