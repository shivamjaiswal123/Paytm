const z = require('zod')
const jwt = require('jsonwebtoken')
const { User, Account } = require('../db/db.js')


const signupSchema = z.object({
    username: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long")
})

const signup = async(req, res) => {
    try {
        // const { success } = signupSchema.safeParse(req.body)
        const parsedPayload = signupSchema.safeParse(req.body)

        if(!parsedPayload.success){
            // res.status(403).json({
            //     msg: "Something went wrong, try again!"
            // })
            // return

            return res.status(400).json({
                error: parsedPayload.error.errors[0].message
            });
        }
        
        const foundUser = await User.findOne({ 
            $or: [
                { username: req.body.username },
                { email: req.body.email }
            ]
        })

        if(foundUser){
            return res.json({
                msg: "User already exist"
            })
        }

        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        const balance = Math.random()*10000
        await Account.create({
            userId: user._id,
            balance
        })


        const token = jwt.sign({
            userId: user._id
        }, process.env.ACCESS_TOKEN_SECRET)

        res.status(200).json({
            msg: "Account is created",
            token
        })   
    } catch (error) {
        res.status(400).json({
            error: "Something went wrong!!"
        })
    }
}


const signinSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long")
})
const signin = async(req, res) => {
    const parsedPayload = signinSchema.safeParse(req.body)

    if(!parsedPayload.success){
        return res.status(400).json({
            error: parsedPayload.error.errors[0].message
        });
    }

    const foundUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if(!foundUser){
        return res.json({
            msg: "User does not exist"
        })
    }

    const token = jwt.sign({ userId: foundUser._id }, process.env.ACCESS_TOKEN_SECRET)
    
    res.status(200).json({
        msg: "User logged in succussfully",
        token
    })
}

const getUsers = async(req, res) => {
    const filter = req.query.filter
    console.log(req.query.filter)
    const searchedUsers = await User.find({
        $or:[
            { username: {"$regex": filter}},
            { email: {"$regex": filter }}
        ]
    })

    console.log(searchedUsers)

    if(!searchedUsers){
        res.json({
            msg: "Not found"
        })
    }

    res.status(200).json({
        searchedUsers
    })
}


module.exports = {
    signup,
    signin,
    getUsers
}