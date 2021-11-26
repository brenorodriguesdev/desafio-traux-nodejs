import { AuthenticationService } from "../../../data/services/login/authentication"
import { JsonWebToken } from "../../../infra/cryptography/jsonwebtoken"
import { Middleware } from "../../../presentation/contracts/middleware"
import { AuthenticationMiddleware } from "../../../presentation/middlewares/authentication"

export const makeAuthenticationMiddleware = (): Middleware => {
    const jsonwebtoken = new JsonWebToken(process.env.SECRET_KEY)
    const authenticationService = new AuthenticationService(jsonwebtoken)
    return new AuthenticationMiddleware(authenticationService)
}