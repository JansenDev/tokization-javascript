import { Router } from "express";
import { ICreditCard } from "../../domain/dto/creditCard.dto";
import { CreditCardService } from "../../services/creditCard.service";
import { validateTokenRoute } from "../../utils/celebrate/validator.midleware";
import * as response from "../../utils/responseApi/index.reponse";

const route = Router()

route.post("/tokens", validateTokenRoute, async (req, res, next) => {
    try {
        const cardCreditService = new CreditCardService();
        const { card_number, cvv, email, expiration_month, expiration_year } = req.body as ICreditCard;
        const creditCard = { card_number, cvv, email, expiration_month, expiration_year };
        const tokenResponse = await cardCreditService.saveCreditCard(creditCard);
        // const tokenResponse = " await cardCreditService.saveCreditCard(creditCard)";
        
        response.success<string>(res, tokenResponse, "Se registró token correctamente", 201)
    } catch (error: any) {
        next(error);
    }
})

export { route }

