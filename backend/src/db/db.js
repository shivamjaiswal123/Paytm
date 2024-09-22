const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    balance: {
        type: Number,
        required: true
    }
})


const User = mongoose.model('User', userSchema)
const Account = mongoose.model('Account', accountSchema)

//database connection
const connectDatabase = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB is connected")
    } catch (error) {
        console.error("Error in connecting DB: ", error)
    }
}

module.exports = {User, connectDatabase, Account}
