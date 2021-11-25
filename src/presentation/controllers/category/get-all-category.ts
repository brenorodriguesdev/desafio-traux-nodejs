import { GetAllCategoryUseCase } from "../../../domain/useCases/category/get-all-category";
import { Controller } from "../../contracts/controller";
import { HttpRequest, HttpResponse } from "../../contracts/http";
import { ok, serverError } from "../../contracts/http-helper";

export class GetAllCategoryController implements Controller {
    constructor (private readonly getAllCategoryUseCase: GetAllCategoryUseCase) {}
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const categories = await this.getAllCategoryUseCase.get()
            return ok(categories)
        } catch (error) {
            return serverError()
        }
    }
}