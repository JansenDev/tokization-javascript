import { Pool } from "pg";
import { connectionPool } from "./conection.db";



class CreditCardRepository {

    constructor(private pool: Pool = connectionPool.getInstance()) { }

    async saveCreditCard(token_id: string, creditCardCrypt: string) {
            // console.log("DATA:", { token_id, creditCardCrypt });
            await this.pool.query(`INSERT INTO credit_card(token, detail) VALUES ($1,$2);`, [token_id, creditCardCrypt])
            // console.log("SAVE CREDIT CARD resp:", response);
            return token_id
    }

}

export const creditCardRepositoryInstance = new CreditCardRepository()