const db = require('../util/database');

var khachHangModel = {}

khachHangModel.getThongTin = (sodienthoai, result) => {
  let sql = "SELECT * FROM khachhang where SoDienThoai = '" + sodienthoai + "'"
  db.query(sql, (err, response) => {
    if (err) {
      console.log(err) 
      return result(err, null)
    }
    else {
      console.log('GetThongTin thanh cong')
      return result(null, response)
    }
  });
}

khachHangModel.capNhatThongTin = (sodienthoai, ten, email, giotinh, manhanvien, result) => {
  let sql = "UPDATE `khachhang` SET `Ten` = '" + ten + "' , `Email` = '" + email + "',"+
  // `MatKhau` = '" + matkhau + "'` " +
        " `GioiTinh` = '" + giotinh + "'" + 
        " WHERE `khachhang`.`SoDienThoai` = '" + sodienthoai + "'"
  let sql1 = "SELECT * FROM khachhang where SoDienThoai = '" + sodienthoai + "'"
  db.query(sql, (err, response) => {
    if (err) {
      console.log(err) 
      return result(err, null)
    }
    else {
      console.log(manhanvien == null)

      db.query(sql1, (err, response1) => {
        if (err) {
          console.log(err) 
          return result(err, null)
        }
        else {
          console.log(response1)
          console.log('GetThongTin thanh cong')
          return result(null, response1)
        }
      });
      console.log('Sửa thanh cong')
    }
  });
}

khachHangModel.doimatkhau = (sodienthoai, matkhau, result) => {
  let sql = "UPDATE `khachhang` SET  `MatKhau` = '" + matkhau + "' " +
        " WHERE `khachhang`.`SoDienThoai` = '" + sodienthoai + "'"
  let sql1 = "SELECT * FROM khachhang where SoDienThoai = '" + sodienthoai + "'"
  db.query(sql, (err, response) => {
    if (err) {
      console.log(err) 
      return result(err, null)
    }
    else {
      db.query(sql1, (err, response1) => {
        if (err) {
          console.log(err) 
          return result(err, null)
        }
        else {
          console.log(response1)
          console.log('Doi mat khau thanh cong')
          return result(null, response1)
        }
      });
      console.log('Sửa thanh cong')
    }
  });
}

khachHangModel.dangky = (sodienthoai, ten, email, giotinh, matkhau, result) => {
  try {
    let sql = "INSERT INTO `khachhang` (`SoDienThoai`, `Ten`, `Email`, `AnhDaiDien`, `GioiTinh`, `MatKhau`) VALUES ('"+ sodienthoai + "', '"+
    ten + "', '" + email + "','', '" + giotinh + "','" + matkhau + "')"
    db.query(sql, (err, response) => {
      try {
        if (err) {
          console.log(err) 
          return result(err, null)
        }
        else {
          console.log('Dang ky thanh cong')
          return result(null, response)
        }
      } catch(e) {
        return result(e, null)
      }
    });
  } catch (e) {
    console.log('log '+ e.toString())
    return result(e, null)
  }
}

khachHangModel.dangnhap = (sodienthoai, matkhau, result) => {
  let sql = "SELECT * FROM khachhang where SoDienThoai = '" + sodienthoai + "' And MatKhau = '" + matkhau + "'";
    try {
      db.query(sql, (err, response) => {
        if (err) {
          console.log(err) 
          return result(err, null)
        }
        else {
          console.log('Dang nhap thanh cong')
          return result(null, response)
        }
      }
      );
    } catch (e) {
      return result(e, null)
    }
}



module.exports = khachHangModel