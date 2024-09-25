const express = require('express');
const router = express.Router()
const authMiddleware = require('../middlewares/auth.middleware')

const {signup, signin, getUsers, getAllUsers} = require('../controllers/user.controller.js')

router.route('/signup').post(signup)

router.route('/signin').post(signin)

router.route('/bulk').get(getUsers)

router.route('/all-users').get(authMiddleware, getAllUsers)

module.exports = router