const khachhang_models = require('../models/khachhang_models')

class KhachHangController {
  thongtin(req, res) {
    var sodienthoai = req.query.sodienthoai;
    khachhang_models.getThongTin(sodienthoai, function(err, response) {
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
}

module.exports = new KhachHangController;