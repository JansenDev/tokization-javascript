import { Pool, QueryResult } from "pg";
import { CreditCardResponse } from "../domain/response/CreditCard.response";
import { connectionPool } from "./conection.db";



class CreditCardRepository {

    constructor(private pool: Pool = connectionPool.getInstance()) { }

    async saveCreditCard(token_id: string, creditCardCrypt: string) {
        await this.pool.query(`INSERT INTO credit_card(token, detail) VALUES ($1,$2);`, [token_id, creditCardCrypt])
        return token_id
    }

    async getCreditCardByToken(token_id: string) {

        const creditcardResponse: QueryResult<CreditCardResponse> = await this.pool.query(`SELECT cc.credit_card_id, detail FROM credit_card cc WHERE cc.token=$1;`, [token_id])

        const isEmpty = !creditcardResponse?.rows[0]?.detail
        if (isEmpty) throw new Error("No existent credit card")

        return creditcardResponse?.rows[0]?.detail;
    }

}

export const creditCardRepositoryInstance = new CreditCardRepository()