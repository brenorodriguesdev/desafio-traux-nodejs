import { AuthenticationUseCase } from "../../domain/useCases/login/authentication"
import { HttpRequest, HttpResponse } from "../contracts/http"
import { ok, serverError, unauthorized } from "../contracts/http-helper"
import { Middleware } from "../contracts/middleware"

export class AuthenticationMiddleware implements Middleware {
    constructor (
      private readonly authenticationUseCase: AuthenticationUseCase
    ) { }
  
    async handle (request: HttpRequest): Promise<HttpResponse> {
      try {
        const { accessToken } = request.body
        if (!accessToken) {
          return unauthorized(new Error('token is invalid!'))
        }
        const account = await this.authenticationUseCase.auth(accessToken)
        if (account instanceof Error) {
          return unauthorized(account)
        }
        const { id } = account
        return ok({ id })
      } catch (error) {
        return serverError()
      }
    }
  }