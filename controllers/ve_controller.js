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
    var sodienthoai = req.header('sodienthoai')
    veModel.getVeDaHuy(sodienthoai, function(err, response) {
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
    var sodienthoai = req.header('sodienthoai');
    veModel.getLichSu(sodienthoai, function(err, response) {
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
    var sodienthoai = req.header('sodienthoai');
    var listve = req.body.listve
    var error = false;
    for (var i = 0; i < listve.length; i++) {
      var matuyen = listve[i].MaTuyen
      var ngay = listve[i].Ngay
      var maghe = listve[i].MaGhe
      veModel.datve(matuyen, sodienthoai, ngay, maghe, function(err, response) {
        error = err
      })
    }
    if (error) {
      res.json({
        status: false,
        message: "Đặt vé không thành công",
      })
    }
    else {
      res.json({
        status: true,
        message: "Đặt vé thành công"
    })
    }
  }

  huyve(req, res) {
    var madatve = req.query.madatve;
    veModel.huyve(madatve, function(err, response) {
      if (err) {
        res.json({
          status: false,
          message: "Lỗi khi huỷ vé",
        })
      }
      else {
        res.json({
          status: true,
          message: "Huỷ vé thành công"
      })
    }
  })
  }
}



module.exports = new VeController