const express = require('express');
const router = express.Router(); 

const khachHangController = require('../controllers/khachhang_controller');

router.use('/dangnhap', khachHangController.dangnhap)

router.use('/dangky', khachHangController.dangky)

router.use('/sua', khachHangController.suathongtin)

module.exports = router;
