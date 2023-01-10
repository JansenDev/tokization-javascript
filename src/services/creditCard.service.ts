import { CreditCardDecode, ICreditCard } from "../domain/dto/creditCard.dto";
import { creditCardRepositoryInstance } from "../repository/creditCard.repository";
import { Base64Implement } from "../utils/encrypt/implements/base64.implement";
import { BtoaImplement } from "../utils/encrypt/implements/bta.implement";
import { JwtImplement } from "../utils/encrypt/implements/jwt.implement";
import { CryptAbstraction } from "../utils/encrypt/index.utils";
import { generateUUID } from "../utils/utilities.util";

const base64Implement = new Base64Implement()
const btoaImplement = new BtoaImplement()
const jwtImplement = new JwtImplement()
const crypt = new CryptAbstraction(jwtImplement)
export class CreditCardService {
    constructor(private creditCardRepository = creditCardRepositoryInstance) { }

    async saveCreditCard(creditCard: ICreditCard): Promise<string> {

        const token_id = generateUUID()

        const creditCardCrypt = crypt.code(creditCard)
        const tokenResponse = await this.creditCardRepository.saveCreditCard(token_id, creditCardCrypt)
        return tokenResponse
    }

    async getCreditCardByToken(token: string): Promise<CreditCardDecode> {
        const getCreditCardByToken = await this.creditCardRepository.getCreditCardByToken(token)
        const creditCardDecode = crypt.encode(getCreditCardByToken)
        const creditCardDetail = JSON.parse(creditCardDecode) as CreditCardDecode
  
        return creditCardDetail
    }
}

// export const creditCardServiceInstance = new CreditCardService()