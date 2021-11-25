import { GetAllProductUseCase } from "../../../domain/useCases/product/get-all-product";
import { Controller } from "../../contracts/controller";
import { HttpRequest, HttpResponse } from "../../contracts/http";
import { ok, serverError } from "../../contracts/http-helper";

export class GetAllProductController implements Controller {
    constructor (private readonly getAllProductUseCase: GetAllProductUseCase) {}
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
        
            const products = await this.getAllProductUseCase.get()

            return ok(products)
        } catch (error) {
            return serverError()
        }
    }
}