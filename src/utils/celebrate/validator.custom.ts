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
export {
    validateCardNumber,
    validateYearCard
}