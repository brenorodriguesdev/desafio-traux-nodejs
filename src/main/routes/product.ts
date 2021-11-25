import { adaptRouter } from "../adapters/express-controller"
import { Router } from "express"
import { makeCreateProductController } from "../factories/controllers/product/create-product"
import { makeGetAllProductController } from "../factories/controllers/product/get-all-product"
import { makeGetByIdProductController } from "../factories/controllers/product/get-by-id-product"
import { makeDeleteByIdProductController } from "../factories/controllers/product/delete-by-id-product"
import { makeUpdateProductController } from "../factories/controllers/product/update-product"

export default (router: Router): void => {
    router.post('/product', adaptRouter(makeCreateProductController()))
    router.put('/product', adaptRouter(makeUpdateProductController()))
    router.get('/product', adaptRouter(makeGetAllProductController()))
    router.get('/product/:id', adaptRouter(makeGetByIdProductController()))
    router.delete('/product/:id', adaptRouter(makeDeleteByIdProductController()))
}