/**
 * Valida sufijo de email
 * + Match: Solo emails que terminen con gmail.com, hotmail.com, yahoo.es
 */
export const EMAIL_SUFIX = /^.*@(gmail\.com|hotmail\.com|yahoo.es)$/

/**
 * Valida mes del año
 * + Match: Solo numeros del 1 al 12
 */
export const CARD_MONTH_MAX = /^(1[0-2]|0?[1-9])$/

/**
 * Match: Todas las comillas dobles(") 
 */
export const ALL_QUOTE_DOUBLE = /\"/g

/**
 * + Match: Solo la primera comilla simple
 */
export const QUOTE_SIMPLE = /'/

/**
 * Valida formato de token
 * +match: Bearer pk_test_{16 digitos/numeros}
 */
export const TOKEN_SUFIX = /^Bearer\spk_test_[a-z0-9]{16}$/gi
