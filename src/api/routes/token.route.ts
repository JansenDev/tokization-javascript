import { Router } from "express";

const route = Router()

route.post("/tokens", (req, res, next) => {
    // next(new Error("test"))
    const response = req.body.data || null
    res.status(201).send({ status: true, data: response })
})

export { route }