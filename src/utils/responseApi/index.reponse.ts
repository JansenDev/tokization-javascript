import { Response } from "express";
import { ResponseBuilder } from "./ResponseBuilder.response";

const responseBuilder = new ResponseBuilder()

function success<T>(res: Response, data: T, message: string = "Success", status: number = 200) {
    const response = responseBuilder.setData(data)
        .setMessage(message)
        .setStatus(status)
        .build()

    return res.status(status).send(response)
}

function error(res: Response, message: string | Error = "Error", status: number = 500) {
    const response = responseBuilder.setData(null)
        .setMessage(message)
        .setStatus(status)
        .build()

    return res.status(status).send(response)
}

export {
    success,
    error
}