import { adaptRouter } from "../adapters/express-controller"
import { Router } from "express"
import { makeCreateCategoryController } from "../factories/controllers/category/create-category"
import { makeUpdateCategoryController } from "../factories/controllers/category/update-category"
import { makeGetAllCategoryController } from "../factories/controllers/category/get-all-category"
import { makeGetByIdCategoryController } from "../factories/controllers/category/get-by-id-category"
import { makeDeleteByIdCategoryController } from "../factories/controllers/category/delete-by-id-category"

export default (router: Router): void => {
    router.post('/category', adaptRouter(makeCreateCategoryController()))
    router.put('/category', adaptRouter(makeUpdateCategoryController()))
    router.get('/category', adaptRouter(makeGetAllCategoryController()))
    router.get('/category/:id', adaptRouter(makeGetByIdCategoryController()))
    router.delete('/category/:id', adaptRouter(makeDeleteByIdCategoryController()))
}