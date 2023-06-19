import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default function putBooks(req, res) {
    try {
        const booksFile = path.join(__dirname, "..", "data", "books.json")
        const books = JSON.parse(fs.readFileSync(booksFile, "utf-8"))

        console.log(req.body)

        const data = {...req.body}
        data.id = req.params.id

        console.log(data)

        const t = books.filter((e) => {
            return e.id !== req.params.id
        })

        t.push(data)

        fs.writeFileSync(booksFile, JSON.stringify(t))

        res.status(200).send("Livre modifié avec succés !")
    } catch (error) {
        res.status(500).send("Error on sending books data")
    }
}