export class ResponseApi<T>{

    constructor(private data: T, private message: string | Error = "Success", private status: number = 200,) { }

}