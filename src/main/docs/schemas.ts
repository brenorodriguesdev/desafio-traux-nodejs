import {
  createCategoryParamsSchema,
  createProductParamsSchema,
  signInParamsSchema,
  signUpParamsSchema,
  updateCategoryParamsSchema,
  updateProductParamsSchema,
} from './schemas/'

export default {
  signUpParams: signUpParamsSchema,
  signInParams: signInParamsSchema,
  createCategoryParams: createCategoryParamsSchema,
  updateCategoryParams: updateCategoryParamsSchema,
  createProductParams: createProductParamsSchema,
  updateProductParams: updateProductParamsSchema,
}