import Joi from 'joi';

export default Joi.object({
    id: Joi
    .string()
    .required()
    .messages({
        'string.empty': 'id is mandatory',
        'string.pattern.base': 'id bad format',
        'any.required': 'id is mandatory'
    }),

    // Titre     
    title:Joi
      .string()      
      .required()
      .messages({
        'string.empty': 'title is mandatory',
        'string.pattern.base': 'incorrect title format',
        'any.required': 'title is mandatory'
        }),

    // Description
    description: Joi
    .string()
    .min(0)
    .messages({       
        'string.empty': 'description is mandatory', 
        'string.pattern.base': 'incorrect description'        
    }),

    status: Joi
    .boolean()
    .required()
    .messages({
        'string.empty': 'status is mandatory',
        'string.pattern.base': 'incorrect status format',
        'any.required': 'status is mandatory'
    })
    
});