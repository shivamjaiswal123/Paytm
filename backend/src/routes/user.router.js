const express = require('express');
const router = express.Router()

const {signup, signin, getUsers} = require('../controllers/user.controller.js')

router.route('/signup').post(signup)

router.route('/signin').post(signin)

router.route('/bulk').get(getUsers)


module.exports = router