const { Account } = require('../db/db.js')
const mongoose = require('mongoose') 

const getBalance = async(req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    })

    if(!account){
        res.json({
            msg: 'Account does not exist'
        })
    }

    res.status(200).json({
        balance: account.balance
    })
}

const transferMoney = async(req, res) => {
    const session = await mongoose.startSession()
    
    //start transaction
    session.startTransaction()

    const toTransfer = req.body.to
    const amount = req.body.amount

    //sender has account?
    const senderAccount = await Account.findOne({
        userId: req.userId
    }).session(session)

    //insufficient balance in sender's account
    if(senderAccount.balance < amount){
        return res.status(400).json({
            msg: "Insufficient balance"
        })
    }

    //receiver account exist
    const receiverAccount = await Account.findOne({
        userId: toTransfer
    }).session(session)

    if(!receiverAccount){
        return res.status(400).json({
            msg: "Invalid account"
        })
    }

    await Account.findOneAndUpdate({ userId: req.userId },{
        $inc: {
            balance: -amount
        }
    }).session(session)
    await Account.findOneAndUpdate({ userId: toTransfer },{
        $inc: {
            balance: amount
        }
    }).session(session)

    res.json({
        message: "Transfer successful"
    })
    // Commit the transaction
    await session.commitTransaction()
}

module.exports = {
    getBalance,
    transferMoney
}