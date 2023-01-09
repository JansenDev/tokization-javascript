import { config as addEnviroments } from "dotenv";
import Express from "express";
import { appRoutes } from "./api";
import { Conection } from "./repository/conection.db";
import { CELEBRATE_ERROR_HANDLER, INTERNAL_SERVER_ERROR_HANDLER, NOT_FOUND_HANDLER } from "./utils/errors.handler";
import { midlewaresExternal } from "./utils/libraries.midleware";

addEnviroments()
const app = Express()
const APP_PORT = process.env.APP_PORT || 3001

app.use(midlewaresExternal)
app.use(appRoutes)
app.use(CELEBRATE_ERROR_HANDLER)
app.use(INTERNAL_SERVER_ERROR_HANDLER)
app.use(NOT_FOUND_HANDLER)



app.listen(APP_PORT, () => {
    validateDBConnection()
    console.log(`[APP] http://localhost:${APP_PORT}`);
})


const validateDBConnection = () => {
    const pool = new Conection().getInstance()
    pool.query("select now()")
        .then(_ => console.log(`[DB] Connected`))
        .catch(_ => console.log(`[DB] No Connected`))
}