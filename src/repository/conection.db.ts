import { Pool, PoolConfig } from "pg"
import { config as addEnviroments } from "dotenv";

addEnviroments()

export class Conection {
    private static instance?: Pool;

    constructor() {
        Conection.instance = this.getInstance()
    }

    private poolConfig(): PoolConfig {
        const host = process.env.DB_HOST
        const database = process.env.DB_NAME
        const port = process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432
        const user = process.env.DB_USERNAME
        const password = process.env.DB_PASSWORD

        return {
            host,
            database,
            port,
            password,
            user
        }
    }

    public getInstance(): Pool {
        return Conection.instance ? Conection.instance : new Pool(this.poolConfig())
    }
}

export const connectionPool = new Conection()