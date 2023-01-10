import { Router } from "express";
import { CreditCardDecode, ICreditCard } from "../../domain/dto/creditCard.dto";
import { CreditCardService } from "../../services/CreditCard.service";
import { validateCreditCardBodyRoute, validateHeaders, validateTokenBodyRoute } from "../../utils/celebrate/validator.midleware";
import { CustomMidleware } from "../../utils/custom.midleware";
import * as response from "../../utils/responseApi/index.reponse";

const route = Router()

const customMidleware = new CustomMidleware()
const cardCreditService = new CreditCardService();

route.post("/tokens", validateHeaders, validateTokenBodyRoute, customMidleware.validateAuthToken, async (req, res, next) => {
    try {

        const { card_number, cvv, email, expiration_month, expiration_year } = req.body as ICreditCard;
        const creditCard = { card_number, cvv, email, expiration_month, expiration_year };
        // const tokenResponse = await cardCreditService.saveCreditCard(creditCard);
        const tokenResponse = " await cardCreditService.saveCreditCard(creditCard)";

        response.success<string>(res, tokenResponse, "Se registró token correctamente", 201)
    } catch (error: any) {
        next(error);
    }
})

route.post("/creditCard", validateHeaders, customMidleware.validateAuthToken, validateCreditCardBodyRoute, async (req, res, next) => {
    try {
        const { token } = req.body

        const creditCardDecode = await cardCreditService.getCreditCardByToken(token)
        response.success<CreditCardDecode>(res, creditCardDecode, "Success", 200)
    } catch (error: any) {
        next(error);
    }
})

export { route }

