import { ICryptImplement } from "../index.utils";

export class Base64Implement implements ICryptImplement {
    code(payload: Object): string {
        const payloadString = JSON.stringify(payload)
        const buffer = Buffer.from(payloadString)
        
        return buffer.toString('base64')
    }
    encode(token: string): string {
        const buffer = Buffer.from(token, 'base64')
        return buffer.toString()
    }

}