import { RequestHandler } from "express";
import { authServiceInstance } from "../services/Auth.service";

export class CustomMidleware {
    constructor(private authService = authServiceInstance) { }

    validateAuthToken: RequestHandler = async (req, _, next) => {
        try {
            const { authorization } = req.headers
            const isExist = await this.authService.isExistsUser(authorization!)

            if (!isExist) next(new Error("Token invalid"))

            next()
        } catch (error) {
            next(error)
        }
    }
}

export const customMidlewareInstance = new CustomMidleware()
