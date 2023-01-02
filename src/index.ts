import { config as addEnviroments } from "dotenv";
import Express from "express";
import { mainRoute } from "./api";
import { INTERNAL_SERVER_ERROR_HANDLER, NOT_FOUND_HANDLER } from "./utils/errors.handler";
import { midlewaresHandler } from "./utils/libraries.midleware";

addEnviroments()
const app = Express()
const APP_PORT = process.env.APP_PORT || 3001

app.use(midlewaresHandler)
app.use(mainRoute)
app.use(INTERNAL_SERVER_ERROR_HANDLER)
app.use(NOT_FOUND_HANDLER)



app.listen(APP_PORT, () => console.log(`[APP] http://localhost:${APP_PORT}`))