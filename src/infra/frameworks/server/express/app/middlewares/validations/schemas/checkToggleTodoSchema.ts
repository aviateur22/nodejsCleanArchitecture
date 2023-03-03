import Joi from 'joi';

// Schema vérification modification status
export default Joi.object({
  status: Joi
  .boolean()
  .required()
  .messages({
    'string.empty': 'status is mandatory',
    'string.pattern.base': 'incorrect status format',
    'any.required': 'status is mandatory'
  })
});