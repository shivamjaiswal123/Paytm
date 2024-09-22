const express = require('express');
const router = express.Router()

const { getBalance, transferMoney } = require('../controllers/account.controller.js')
const authMiddleware = require('../middlewares/auth.middleware')

router.route('/balance').get(authMiddleware, getBalance)
router.route('/transfer').post(authMiddleware, transferMoney)



module.exports = router