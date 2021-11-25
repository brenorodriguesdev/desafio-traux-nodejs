import { Login } from "../../entities/login";

export interface LoginRepository {
    getByUsername: (username: string) => Promise<Login>
    create: (login: Login) => Promise<Login>
}