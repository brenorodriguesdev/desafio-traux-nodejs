import { adaptRouter } from "../adapters/express-controller"
import { Router } from "express"
import { makeCreateCategoryController } from "../factories/controllers/category/create-category"
import { makeUpdateCategoryController } from "../factories/controllers/category/update-category"
import { makeGetAllCategoryController } from "../factories/controllers/category/get-all-category"
import { makeGetByIdCategoryController } from "../factories/controllers/category/get-by-id-category"
import { makeDeleteByIdCategoryController } from "../factories/controllers/category/delete-by-id-category"
import { makeAuthenticationMiddleware } from "../factories/middlewares/authentication"
import { adaptMiddleware } from "../adapters/express.middleware"

export default (router: Router): void => {
    router.post('/category', adaptMiddleware(makeAuthenticationMiddleware()),  adaptRouter(makeCreateCategoryController()))
    router.put('/category', adaptMiddleware(makeAuthenticationMiddleware()),  adaptRouter(makeUpdateCategoryController()))
    router.get('/category', adaptMiddleware(makeAuthenticationMiddleware()),  adaptRouter(makeGetAllCategoryController()))
    router.get('/category/:id', adaptMiddleware(makeAuthenticationMiddleware()),  adaptRouter(makeGetByIdCategoryController()))
    router.delete('/category/:id', adaptMiddleware(makeAuthenticationMiddleware()),  adaptRouter(makeDeleteByIdCategoryController()))
}