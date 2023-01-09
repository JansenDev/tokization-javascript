import { ResponseApi } from "./ResponseApi.response";

export class ResponseBuilder<T> {
    constructor(private data?: T | null, private message?: string | Error, private status?: number) {
        this.reset()
    }

    protected reset() {
        this.data = null;
        this.message = "Sucess";
        this.status = 200;
    }

    setData(data: T) {
        this.data = data
        return this
    }

    setMessage(message: string | Error) {
        this.message = message
        return this;
    }

    setStatus(status: number) {
        this.status = status
        return this
    }

    build() {
        const response = new ResponseApi(this.data, this.message, this.status)
        this.reset()
        return response
    }

}