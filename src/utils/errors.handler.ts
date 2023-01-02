import { ErrorRequestHandler, RequestHandler } from "express";


const NOT_FOUND_HANDLER: RequestHandler = (_, res) => {
    res.status(404).send({ status: 404, data: null, message: "No se encontró recursos" })
}

const INTERNAL_SERVER_ERROR_HANDLER: ErrorRequestHandler = (err, _, res, __) => {
    console.log("[ERROR-HANDLER]", err);
    const message = err.message || "INTERNAL SERVER ERROR"
    res.status(500).send({ status: 500, data: null, message })
}



export { INTERNAL_SERVER_ERROR_HANDLER, NOT_FOUND_HANDLER }