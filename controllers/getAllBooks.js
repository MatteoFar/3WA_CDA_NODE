import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default function getAllBooks(req, res) {
    try {
        const booksFile = path.join(__dirname, "..", "data", "books.json")
        const books = JSON.parse(fs.readFileSync(booksFile, "utf-8"))

        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        if(isNaN(page) && isNaN(limit)) {
            res.status(200).send(books)
            return
        }

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
 
        const results = {};
        if (endIndex < books.length) {
        results.next = {
            page: page + 1,
            limit: limit
        };
        }
 
        if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit
        };
        }
 
        results.results = books.slice(startIndex, endIndex);

        res.status(200).send(results)
    } catch (error) {
        console.log(error)
        res.status(500).send("Error on sending books data")
    }
}