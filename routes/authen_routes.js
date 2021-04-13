const express = require('express');
const router = express.Router(); 

const authencontroller = require('../controllers/authen_controller')

router.use('/', authencontroller.login);

module.exports = router
