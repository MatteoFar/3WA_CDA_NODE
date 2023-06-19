import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default function getAllBooks(req, res) {
    try {
        const booksFile = path.join(__dirname, "..", "data", "books.json")
        const books = JSON.parse(fs.readFileSync(booksFile, "utf-8"))
    
        res.status(200).send(books)
    } catch (error) {
        res.status(500).send("Error on sending books data")
    }
}