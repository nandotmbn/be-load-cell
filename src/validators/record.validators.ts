import Joi from 'joi';

/* eslint-disable @typescript-eslint/no-explicit-any */
function validatePostRecord(owner: any) {
  const schema = Joi.object({
    weight: Joi.number().min(0).required()
  });
  return schema.validate(owner);
}

export { validatePostRecord };

