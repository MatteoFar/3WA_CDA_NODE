import express from "express";
import router from "./routes/routes.js";
import logger from "./middlewares/logger.js";


const app = express()
const PORT = 8000

app.use(express.urlencoded({extended: false}))

app.use("/",logger, router)

app.use((req,res) => {
    res.status(404).send("Erreur, page introuvable")
})

app.listen(PORT, () => {
    console.log(`Express server listening on http://localhost:${PORT}`)
})