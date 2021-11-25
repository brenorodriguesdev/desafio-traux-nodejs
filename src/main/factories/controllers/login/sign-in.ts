import { SignInService } from "../../../../data/services/login/sign-in";
import { Bcrypt } from "../../../../infra/cryptography/bcrypt";
import { JsonWebToken } from "../../../../infra/cryptography/jsonwebtoken";
import { LoginRepositoryTypeORM } from "../../../../infra/repositories/login-repository-typeorm";
import { Controller } from "../../../../presentation/contracts/controller";
import { SignInController } from "../../../../presentation/controllers/login/sign-in";
import { makeSignInValidator } from "../../validations/login/sign-in";

export const makeSignInController = (): Controller => {
    const loginRepository = new LoginRepositoryTypeORM()
    const bcrypt = new Bcrypt(12)
    const jsonwebtoken = new JsonWebToken(process.env.SECRET_KEY)
    const signInService = new SignInService(loginRepository, bcrypt, jsonwebtoken)
    return new SignInController(makeSignInValidator(), signInService)
}