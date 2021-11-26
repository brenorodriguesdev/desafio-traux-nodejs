import { SignUpUseCase } from "../../../domain/useCases/login/sign-up";
import { Validator } from "../../../validation/contracts/validator";
import { Controller } from "../../contracts/controller";
import { HttpRequest, HttpResponse } from "../../contracts/http";
import { badRequest, created, serverError } from "../../contracts/http-helper";

export class SignUpController implements Controller {
    constructor (private readonly validator: Validator, private readonly signUpUseCase: SignUpUseCase) {}
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }

            const { name, username, password } = httpRequest.body
            
            const hasError = await this.signUpUseCase.sign({
                name,
                username,
                password
            })

            if (hasError instanceof Error) {
                return badRequest(hasError)
            }

            return created()
        } catch (error) {
            return serverError()
        }
    }
}