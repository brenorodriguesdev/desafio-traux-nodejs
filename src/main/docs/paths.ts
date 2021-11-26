import { categoryByIdPath, categoryPath, productByIdPath, productPath, signInPath, signUpPath } from "./paths/"

export default {
    '/signIn': signInPath,
    '/signUp': signUpPath,
    '/category': categoryPath,
    '/category/{id}': categoryByIdPath,
    '/product': productPath,
    '/product/{id}': productByIdPath,
}