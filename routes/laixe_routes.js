const express = require('express')
const Route = require('express/lib/router/route')
const router = express.Router()

const laixeController = require('../controllers/laixe_controller')

router.get('/chuyenxe', laixeController.getChuyenXe)

router.use('/khoihanh', laixeController.khoihanh)

router.use('/denben', laixeController.veben)

module.exports = router
