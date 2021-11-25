import { SignUpModel } from "../models/sign-up";

export interface SignUpUseCase {
    sign: (signUpModel: SignUpModel) => Promise<void>
}