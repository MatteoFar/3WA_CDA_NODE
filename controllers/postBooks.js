import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default function postBooks(req, res) {
    try {
        const booksFile = path.join(__dirname, "..", "data", "books.json")
        const books = JSON.parse(fs.readFileSync(booksFile, "utf-8"))

        const data = {...req.body}
        data.id = new Date().getTime().toString()

        books.push(data)
        fs.writeFileSync(booksFile, JSON.stringify(books))

        res.status(200).send("Livre ajouté avec succés !")
    } catch (error) {
        res.status(500).send("Error on sending books data")
    }
}