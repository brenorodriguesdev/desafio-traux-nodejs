import { SignUpModel } from "../../models/login/sign-up";


export interface SignUpUseCase {
    sign: (signUpModel: SignUpModel) => Promise<void | Error>
}