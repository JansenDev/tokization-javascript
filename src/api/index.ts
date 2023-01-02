import { route as tokenRoute } from "./routes/token.route";
import { Router } from "express";

const mainRoute = Router()
const route = Router()

route.use(tokenRoute)

mainRoute.use("/v2", route)

export { mainRoute }