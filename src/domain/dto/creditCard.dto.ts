export interface ICreditCard {
    email: string
    card_number: string
    cvv?: string
    expiration_year: string
    expiration_month: string
}

export interface CreditCardDecode extends Omit<ICreditCard, "cvv"> {

}