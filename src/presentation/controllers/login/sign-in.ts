import { SignInUseCase } from "../../../domain/useCases/login/sign-in";
import { Validator } from "../../../validation/contracts/validator";
import { Controller } from "../../contracts/controller";
import { HttpRequest, HttpResponse } from "../../contracts/http";
import { badRequest, ok, serverError, unauthorized } from "../../contracts/http-helper";

export class SignInController implements Controller {
    constructor (private readonly validator: Validator, private readonly signInUseCase: SignInUseCase) {}
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }

            const { username, password } = httpRequest.body
            
            const token = await this.signInUseCase.sign({
                username,
                password
            })

            if (token instanceof Error) {
                return unauthorized(token)
            }

            return ok(token)
        } catch (error) {
            return serverError()
        }
    }
}