import JWT from "jsonwebtoken";

/**
 * Algoritmo simple de luhn que permite validar los digitos  de tarjetas de credito
 */
const checkLuhn = (num: string) => {
    const isEmpty = !num.trim().length
    if (isEmpty) return false;

    let arr = (num + '')
        .split('')
        .reverse()
        .map(x => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit;
    return sum % 10 === 0;
};

const generateUUID = (length: number = 16) => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

export {
    checkLuhn,
    generateUUID
}

