
export interface ICryptImplement {
    code(payload: Object): string
    encode(token: string): string
}

export class CryptAbstraction {
    constructor(protected implement: ICryptImplement) { }

    code(payload: Object): string {
        return this.implement.code(payload)
    }

    encode(token: string): string {
        return this.implement.encode(token)
    }
}