import { ICreditCard } from "../domain/dto/creditCard.dto";
import { creditCardRepositoryInstance } from "../repository/creditCard.repository";
import { Base64Implement } from "../utils/encrypt/implements/base64.implement";
import { BtoaImplement } from "../utils/encrypt/implements/bta.implement";
import { JwtImplement } from "../utils/encrypt/implements/jwt.implement";
import { CryptAbstraction } from "../utils/encrypt/index.utils";
import { generateUUID } from "../utils/utilities.util";

export class CreditCardService {
    constructor(private creditCardRepository = creditCardRepositoryInstance) { }

    async saveCreditCard(creditCard: ICreditCard) {
        const jwtImplement = new JwtImplement()
        const base64Implement = new Base64Implement()
        const btoaImplement = new BtoaImplement()
        const crypt = new CryptAbstraction(jwtImplement)
        const token_id = generateUUID()

        const creditCardCrypt = crypt.code(creditCard)
        const tokenResponse = await this.creditCardRepository.saveCreditCard(token_id, creditCardCrypt)
        return tokenResponse
    }
}

// export const creditCardServiceInstance = new CreditCardService()