const db = require('../util/database');
const diaDiemModel = require('../models/diadiem_model');

class DiaDiemController {
  tinh(req, res, next) {
    diaDiemModel.getDanhSachTinh(function(err, response) {
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
  diemdung(req, res) {
    let sql = "SELECT * FROM diemdung WHERE MaTinh = ? ";
    var matinh = req.query.matinh;
    db.query(sql, matinh, (err, response) => {
      if (err) {
        res.json({
          status: false,
          message: err.toString(),
          data: response,
        });
      }
      res.json({
        status: true,
        data: response,
      });
    });
  }
}

module.exports = new DiaDiemController;