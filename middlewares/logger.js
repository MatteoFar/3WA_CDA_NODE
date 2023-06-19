export default function logger(req, res, next) {
    console.log(req.url)
    console.log(req.method)
    console.log(req.hostname)

    console.log(`Voici les information de connexion: url: ${req.url}, method:${req.method}, host: ${req.hostname}`)
    
    next()
}