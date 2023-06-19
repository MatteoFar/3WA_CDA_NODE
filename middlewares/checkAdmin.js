import jwt from "jsonwebtoken"

export default function checkAdmin(req,res,next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(token === undefined) {
        return res.status(401).send('must be authentified')
    } 

    jwt.verify(token, process.env.SECRET_TOKEN_KEY, (err, user) => {
        if(err) throw err
        req.user = user
        next()
    })
}