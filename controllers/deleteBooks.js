import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default function deleteBooks(req, res) {
    try {
        const booksFile = path.join(__dirname, "..", "data", "books.json")
        const books = JSON.parse(fs.readFileSync(booksFile, "utf-8"))

        const t = books.filter((e) => {
            return e.id !== req.params.id
        })

        if(JSON.stringify(t) === JSON.stringify(books)) {
            res.status(200).send("le livre demandé à être supprimé n'existe pas")
            return
        }

        fs.writeFileSync(booksFile, JSON.stringify(t))

        res.status(200).send("Livre supprimé avec succés !")
    } catch (error) {
        res.status(500).send("Error on sending books data")
    }
}