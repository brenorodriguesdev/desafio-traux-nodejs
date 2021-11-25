import { CreateCategoryUseCase } from "../../../domain/useCases/category/create-category";
import { Validator } from "../../../validation/contracts/validator";
import { Controller } from "../../contracts/controller";
import { HttpRequest, HttpResponse } from "../../contracts/http";
import { badRequest, ok, serverError } from "../../contracts/http-helper";

export class CreateCategoryController implements Controller {
    constructor (private readonly validator: Validator, private readonly createCategoryUseCase: CreateCategoryUseCase) {}
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }

            const { name, image } = httpRequest.body
            
            const product = await this.createCategoryUseCase.create({
                name,
                image
            })

            return ok(product)
        } catch (error) {
            return serverError()
        }
    }
}