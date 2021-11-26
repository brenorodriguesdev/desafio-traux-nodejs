import { AuthenticationUseCase } from "../../../domain/useCases/login/authentication";
import { Decrypter } from "../../contracts/cryptography/decrypter";

export class AuthenticationService implements AuthenticationUseCase {
    constructor(private readonly descrypter: Decrypter) { }
    async auth(accessToken: string): Promise<any> {
        try {
            const decoded = await this.descrypter.decrypt(accessToken)
            return decoded
        } catch (error) {
            return new Error('Token is invalid!')
        }
    }
}