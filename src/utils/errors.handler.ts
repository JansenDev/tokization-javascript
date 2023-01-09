import { ErrorRequestHandler, NextFunction, Request, RequestHandler, Response } from "express";
import { isCelebrateError, CelebrateError } from "celebrate";
import { ALL_QUOTE_DOUBLE } from "./regex.util";
import * as response from "./responseApi/index.reponse";


const NOT_FOUND_HANDLER: RequestHandler = (_, res) => {
    response.error(res, "No se encontró recurso", 404)
}

const INTERNAL_SERVER_ERROR_HANDLER: ErrorRequestHandler = (err, _, res, __) => {
    const message = err.message || "INTERNAL SERVER ERROR"

    console.log("[ERROR-HANDLER]", err);
    response.error(res, message, 500)
}

const CELEBRATE_ERROR_HANDLER = (err: CelebrateError, _: Request, res: Response, next: NextFunction) => {

    if (!isCelebrateError(err)) return next(err)

    console.log("[ERROR-CELEBRATE-HANDLER]", err);
    let errorList = Array.from(err.details, ([name, value]) => [`${value}`]);
    const message = errorList.join(',').replace(ALL_QUOTE_DOUBLE, "'") || err.message || err

    response.error(res, message, 400)
}



export { INTERNAL_SERVER_ERROR_HANDLER, NOT_FOUND_HANDLER, CELEBRATE_ERROR_HANDLER }