const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const auth = req.headers.authorization
    const token = auth.split(' ')[1]
    
    if(!token){
            res.status(401).json({
            msg: "Unauthorized request"
        })
    }
    
    try {
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        if(decode){
            req.userId = decode.userId;
            next()
        }

    } catch (error) {
        console.error("Token Verification failed: ", error)
    } 
}

module.exports = authMiddleware