import { route as tokenRoute } from "./routes/token.route";
import { Router } from "express";

const appRoutes = Router()
const route = Router()

route.use(tokenRoute)

appRoutes.use("/v2", route)

export { appRoutes }