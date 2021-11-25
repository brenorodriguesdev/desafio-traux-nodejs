import { SignUpModel } from "../../../domain/models/login/sign-up";
import { SignUpUseCase } from "../../../domain/useCases/login/sign-up";
import { Hasher } from "../../contracts/cryptography/hasher";
import { LoginRepository } from "../../contracts/repositories/login-repository";

export class SignUpService implements SignUpUseCase {
    constructor (private readonly loginRepository: LoginRepository, private readonly hasher: Hasher) {}
    async sign(signUpModel: SignUpModel): Promise<void | Error> {
        const login = await this.loginRepository.getByUsername(signUpModel.username)
        if (login) {
            return new Error('username already exist!')
        }
        const password = await this.hasher.hash(signUpModel.password)

        await this.loginRepository.create({
            name: signUpModel.name,
            username: signUpModel.username,
            password
        })
    }
}