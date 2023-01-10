import { Joi, Segments, celebrate } from "celebrate";
import { CARD_MONTH_MAX, EMAIL_SUFIX } from "../regex.util";
import { validateAuthorization, validateCardNumber, validateYearCard } from "./validator.custom";


const schemaTokenRoute = {
    [Segments.BODY]: Joi.object().keys({

        email: Joi.string().trim().lowercase().email().min(5).max(100).regex(EMAIL_SUFIX).required().messages({
            "string.pattern.base": "bad email suffix",
        }),

        card_number: Joi.string().trim().min(13).max(16).required().custom(validateCardNumber),

        cvv: Joi.string().trim().min(3).max(4).required(),

        expiration_year: Joi.string().trim().min(4).max(4).custom(validateYearCard).required(),

        expiration_month: Joi.string().trim().min(1).max(2).required().regex(CARD_MONTH_MAX).messages({
            "string.pattern.base": "Characters must be from 1 to 12",
        })

    }).required()
}

const schemaHeaders = {
    [Segments.HEADERS]: Joi.object().keys({
        host: Joi.string(),
        'user-agent': Joi.string(),
        'content-type': Joi.string(),
        authorization: Joi.string().trim().required().custom(validateAuthorization),
        accept: Joi.string(),
        'content-length': Joi.string()
    })
}

const validateTokenBodyRoute = celebrate(schemaTokenRoute)
const validateHeaders = celebrate(schemaHeaders)

export {
    validateTokenBodyRoute,
    validateHeaders
}