const Joi = require("joi");

const schema = Joi.object({
    planType: Joi.string().alphanum().min(3).max(30).required(),
    petName: Joi.string().alphanum().min(3).max(30).required(),
    expiry: Joi.date().greater('now').required()
})

module.exports = schema;
