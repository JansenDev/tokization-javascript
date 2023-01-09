import { ICryptImplement } from "../index.utils";

export class BtoaImplement implements ICryptImplement{
    
    /** * @deprecated payload */
    code(payload: Object): string {
        const payloadString = JSON.stringify(payload);
        return btoa(payloadString)
    }
    encode(token: string): string {
        const payloadString = JSON.stringify(token);
        return atob(payloadString)
    }
    
}