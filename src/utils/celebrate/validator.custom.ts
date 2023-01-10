import { TOKEN_SUFIX } from "../regex.util";
import { checkLuhn } from "../utilities.util";

interface CelebrateCustomFunction {
    (value: string, helpers: { error: any }): any
}

/**
 + Valida numero de tarjeta usando algoritmo luhn
 */
const validateCardNumber: CelebrateCustomFunction = (value, helpers) => {
    const isInvalidaCardNumber = !checkLuhn(value)
    if (isInvalidaCardNumber) return helpers.error('any.custom', {
        error: new Error("card number is  invalid")
    });
    return value
}

/**
 * Valida año de caducidad de tarjeta
 */
const validateYearCard: CelebrateCustomFunction = (year, helpers) => {
    const yearMaxValid = new Date().getFullYear() + 5
    const yearMinValid = new Date().getFullYear() - 5
    const yearCard = Number(year)
    const isValidYear = yearMinValid <= yearCard && yearCard <= yearMaxValid

    if (!isValidYear) return helpers.error("any.custom", {
        error: new Error("year out of limit")
    })

    return year
}

const validateAuthorization: CelebrateCustomFunction = (authorization, helpers) => {
    const matchFormat = authorization.match(TOKEN_SUFIX)
    const isEmpty = !matchFormat || matchFormat?.length === 0
    
    if (isEmpty) return helpers.error("any.custom", {
        error: new Error("token format invalid")
    })

    const token_id = matchFormat[0].split("_")[2]
    return token_id
}

export {
    validateCardNumber,
    validateYearCard,
    validateAuthorization
}