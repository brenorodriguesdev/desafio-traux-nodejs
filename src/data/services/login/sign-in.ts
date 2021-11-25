import { SignInModel } from "../../../domain/models/login/sign-in";
import { SignInUseCase } from "../../../domain/useCases/login/sign-in";
import { Encrypter } from "../../contracts/cryptography/encrypter";
import { HashComparer } from "../../contracts/cryptography/hash-compare";
import { LoginRepository } from "../../contracts/repositories/login-repository";

export class SignInService implements SignInUseCase {
    constructor (private readonly loginRepository: LoginRepository, private readonly hashComparer: HashComparer, private readonly encrypter: Encrypter) {}
    async sign(signInModel: SignInModel): Promise<string | Error> {
        const login = await this.loginRepository.getByUsername(signInModel.username)
        if (!login) {
            return new Error('username or password is invalid!')
        }
        const isValid = await this.hashComparer.compare(signInModel.password, login.password)

        if (!isValid) {
            return new Error('username or password is invalid!')
        }

        return await this.encrypter.encrypt(JSON.stringify(login))
    }
}