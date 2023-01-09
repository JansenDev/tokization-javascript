import JWT from "jsonwebtoken";
import { ICryptImplement } from "../index.utils";

const sercret_key = process.env.JWT_SECRET_KEY;

export class JwtImplement implements ICryptImplement {
    code(payload: Object): string {
        if (!sercret_key) throw new Error("Crear JWT_SECRET_KEY en las variables del sistema")
        const token = JWT.sign(payload, sercret_key, { expiresIn: '15m' })
        return token
    }
    
    encode(token: string): string {
        if (!sercret_key) throw new Error("Crear JWT_SECRET_KEY en las variables del sistema")
        const verify = JWT.verify(token, sercret_key)
        return String(verify)
    }

}