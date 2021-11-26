import {
  createCategoryParamsSchema,
    signInParamsSchema,
    signUpParamsSchema,
    updateCategoryParamsSchema,
  } from './schemas/'
  
  export default {
    signUpParams: signUpParamsSchema,
    signInParams: signInParamsSchema,
    createCategoryParams: createCategoryParamsSchema,
    updateCategoryParams: updateCategoryParamsSchema,
  }