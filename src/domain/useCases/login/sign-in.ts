import { SignInModel } from "../../models/login/sign-in";

export interface SignInUseCase {
    sign: (signInModel: SignInModel) => Promise<string | Error>
}