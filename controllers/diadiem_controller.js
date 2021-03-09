const db = require('../util/database');

class DiaDiemController {

  tinh(req, res) {
    let sql = "SELECT * FROM tinh";
    db.query(sql, (err, response) => {
      if (err)
        res.json({
          status: false,
          message: err.toString(),
          data: response,
        });
      res.json({
        status: true,
        data: response,
      });
    });
  }
  
  diemdung(req, res) {
    let sql = "SELECT * FROM diemdung WHERE MaTinh = ? ";
    var matinh = req.params.MaTinh;
    db.query(sql, (err, response) => {
      if (err)
        res.json({
          status: false,
          message: err.toString(),
          data: response,
        });
      res.json({
        status: true,
        data: response,
      });
    });
  }
}

module.exports = new DiaDiemController;