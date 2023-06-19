import express from 'express'
import home from '../controllers/home.js'
import getAllBooks from '../controllers/getAllBooks.js'
import getBooksById from '../controllers/getBooksById.js'
import postBooks from '../controllers/postBooks.js'
import putBooks from '../controllers/putBooks.js'
import deleteBooks from '../controllers/deleteBooks.js'
import checkAdmin from '../middlewares/checkAdmin.js'

const router = express.Router()

router.get("/", home)
router.get("/books", getAllBooks)
router.get("/books/:id", getBooksById)
router.post("/books", postBooks)
router.put("/books/:id", putBooks)
router.delete("/books/:id", checkAdmin ,deleteBooks)

export default router