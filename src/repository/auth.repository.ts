import { Pool } from "pg";
import { connectionPool } from "./conection.db";

interface User {
    id: number,
    username: string
    token: string
}

class AuthRepository {
    private validUsers: User[];
    constructor(private pool: Pool = connectionPool.getInstance()) {
        this.validUsers = [
            {
                id: 1,
                username: "admin",
                token: "0ae8dW2FpEAZlxlz"
            }
        ]
    }

    async isExistsUser(token: string) {
        const tokeFound = await this.validUsers.find(user => user.token === token)
        if (!tokeFound) throw new Error(`Not found user with token: ${token}`)
        return true
    }

}

export const authRepositoryInstance = new AuthRepository(); 