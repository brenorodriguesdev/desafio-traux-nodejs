import { adaptRouter } from "../adapters/express-controller"
import { Router } from "express"
import { makeCreateProductController } from "../factories/controllers/product/create-product"
import { makeGetAllProductController } from "../factories/controllers/product/get-all-product"
import { makeGetByIdProductController } from "../factories/controllers/product/get-by-id-product"
import { makeDeleteByIdProductController } from "../factories/controllers/product/delete-by-id-product"
import { makeUpdateProductController } from "../factories/controllers/product/update-product"
import { adaptMiddleware } from "../adapters/express.middleware"
import { makeAuthenticationMiddleware } from "../factories/middlewares/authentication"
import uploadConfig from '../config/upload'
import multer from 'multer'

export default (router: Router): void => {
    const upload = multer(uploadConfig)
    router.post('/product', adaptMiddleware(makeAuthenticationMiddleware()), upload.single('image'), adaptRouter(makeCreateProductController()))
    router.put('/product', adaptMiddleware(makeAuthenticationMiddleware()), upload.single('image'), adaptRouter(makeUpdateProductController()))
    router.get('/product', adaptMiddleware(makeAuthenticationMiddleware()), adaptRouter(makeGetAllProductController()))
    router.get('/product/:id', adaptMiddleware(makeAuthenticationMiddleware()), adaptRouter(makeGetByIdProductController()))
    router.delete('/product/:id', adaptMiddleware(makeAuthenticationMiddleware()),  adaptRouter(makeDeleteByIdProductController()))
}