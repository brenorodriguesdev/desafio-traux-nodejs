import { SignUpService } from "../../../../data/services/login/sign-up";
import { Bcrypt } from "../../../../infra/cryptography/bcrypt";
import { LoginRepositoryTypeORM } from "../../../../infra/repositories/login-repository-typeorm";
import { Controller } from "../../../../presentation/contracts/controller";
import { SignUpController } from "../../../../presentation/controllers/login/sign-up";
import { makeSignUpValidator } from "../../validations/login/sign-up";

export const makeSignUpController = (): Controller => {
    const loginRepository = new LoginRepositoryTypeORM()
    const bcrypt = new Bcrypt(12)
    const signUpService = new SignUpService(loginRepository, bcrypt)
    return new SignUpController(makeSignUpValidator(), signUpService)
}