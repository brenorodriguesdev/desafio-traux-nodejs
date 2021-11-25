import { GetByIdCategoryUseCase } from "../../../domain/useCases/category/get-by-id-category";
import { Validator } from "../../../validation/contracts/validator";
import { Controller } from "../../contracts/controller";
import { HttpRequest, HttpResponse } from "../../contracts/http";
import { badRequest, notFound, ok, serverError } from "../../contracts/http-helper";

export class GetByIdCategoryController implements Controller {
    constructor (private readonly validator: Validator, private readonly getByIdCategoryUseCase: GetByIdCategoryUseCase) {}
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.params)
            if (error) {
                return badRequest(error)
            }

            const { id } = httpRequest.params
            
            const category = await this.getByIdCategoryUseCase.get(id)
            
            if (category instanceof Error) {
                return notFound()
            }

            return ok(category)
        } catch (error) {
            return serverError()
        }
    }
}