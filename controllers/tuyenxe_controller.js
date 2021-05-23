const tuyenxeModels = require('../models/tuyenxe_models')

class TuyenXeController {
  tuyenxe(req, res) {
    var madiemdi = req.query.madiemdi
    var madiemden = req.query.madiemden
    var ngay = req.query.ngay
    tuyenxeModels.getTuyenXe(madiemdi, madiemden, ngay, function(err, response) {
      if (err) {
        res.json({
          status: false,
          message: err.toString(),
        });
      }
      else {
        res.json({
          status: true,
          data: response,
        });
      }
    })
  }

  chuyenxe(req, res) {
    var madiemdi = req.query.madiemdi
    var madiemden = req.query.madiemden
    var ngay = req.query.ngay
    tuyenxeModels.getChuyenXe(madiemdi, madiemden, ngay, function(err, response) {
      if (err) {
        res.json({
          status: false,
          message: err.toString(),
        });
      }
      else {
        console.log(response)
        res.json({
          status: true,
          data: response,
        });
      }
    })
  }

  tinhtrangghe(req, res) {
    var machuyen = req.query.machuyen;
    tuyenxeModels.getTinhTrangGhe(machuyen, function(err, response) {
      if (err) {
        res.json({
          status: false,
          message: err.toString(),
        });
      }
      else {
        console.log('Tinh trang ghe')
        console.log(response)
        res.json({
          status: true,
          data: response,
        });
      }
    })

  }
}

module.exports = new TuyenXeController;
