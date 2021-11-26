import { categoryByIdPath, categoryPath, signInPath, signUpPath } from "./paths/"

export default {
    '/signIn': signInPath,
    '/signUp': signUpPath,
    '/category': categoryPath,
    '/category/{id}': categoryByIdPath,
}