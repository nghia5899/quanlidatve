const db = require('../util/database');

var diaDiemModel = {}

diaDiemModel.getDanhSachTinh = (result) => {
    db.query("SELECT * FROM tinh", (err, response) => {
      if (err) {
        return result(err, null)
      }
      else {
        return result(null, response);
      }
    });
}

module.exports = diaDiemModel;