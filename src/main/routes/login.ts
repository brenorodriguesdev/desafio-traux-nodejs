import { adaptRouter } from "../adapters/express-controller"
import { Router } from "express"
import { makeSignInController } from "../factories/controllers/login/sign-in"
import { makeSignUpController } from "../factories/controllers/login/sign-up"

export default (router: Router): void => {
    router.post('/signIn', adaptRouter(makeSignInController()))
    router.post('/signUp', adaptRouter(makeSignUpController()))
   
}