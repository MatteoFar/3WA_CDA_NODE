import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default function getBooksById(req, res) {
    try {
        const booksFile = path.join(__dirname, "..", "data", "books.json")
        const books = JSON.parse(fs.readFileSync(booksFile, "utf-8"))

        const id = req.params.id

        const filtedBooks = books.filter((e) => {
           return e.id === id // by id
        })

        console.log(filtedBooks.length)

        if (filtedBooks.length === 0) {
            console.log('test')
            res.status(200).send("le livre demandé n'existe pas")
            return
        }

        res.status(200).send(filtedBooks)
    } catch (error) {
        res.status(500).send("Error on sending books data")
    }
}