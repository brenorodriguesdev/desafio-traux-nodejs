import { Validator } from "../../../../validation/contracts/validator"
import { RequiredFieldValidator } from "../../../../validation/validators/required-field"
import { ValidatorComposite } from "../../../../validation/validators/validator.composite"

export const makeUpdateCategoryValidator = (): ValidatorComposite => {
    const validations: Validator[] = []
    const requiredFields = ['id', 'name', 'image']
    for (const field of requiredFields) {
      validations.push(new RequiredFieldValidator(field))
    }
    return new ValidatorComposite(validations)
  }