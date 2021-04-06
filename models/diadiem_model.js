const db = require('../util/database');

var diaDiemModel = {}

diaDiemModel.getDanhSachTinh = (result) => {
  db.query("SELECT * FROM tinh", (err, response) => {
    if (err) {
      console.log(err); 
      return result(err, null)
    }
    else {
      console.log('GetDanhSachTinh thanh cong')
      return result(null, response)
    }
  });
}
diaDiemModel.getDiemDung = (matinh, result) => {
  db.query("SELECT * FROM diemdung WHERE MaTinh = "+ matinh, (err, response) => {
    if (err) {
      console.log(err); 
      return result(err, null)
    }
    else {
      console.log('GetDanhDiemDung thanh cong')
      return result(null, response)
    }
  });
}

module.exports = diaDiemModel