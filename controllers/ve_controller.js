const veModel = require('../models/ve_model');

class VeController {
  vecuatoi(req, res) {
    var sodienthoai = req.header('sodienthoai');
    veModel.getVeCuaToi(sodienthoai, function(err, response) {
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
  vedahuy(req, res) {
    veModel.getVeDaHuy(function(err, response) {
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
  lichsu(req, res) {
    veModel.getLichSu(function(err, response) {
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

  datve(req, res) {
    var matuyen = req.body.matuyen;
    var sodienthoai = req.header('sodienthoai');
    console.log(sodienthoai);
    var ngay = req.body.ngay;
    var ghe = req.body.ghe;
    veModel.datve(matuyen, sodienthoai, ngay, ghe, function(err, response) {
      if (err) {
        res.json({
          status: false,
          message: "Lỗi khi đặt vé",
        });
      }
      else {
        res.json({
          status: true,
          message: "Đặt vé thành công"
      });
    }
  })
  }
}

module.exports = new VeController;