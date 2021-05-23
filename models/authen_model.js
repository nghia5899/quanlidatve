const db = require('../util/database')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

var authen = {}

authen.login = (sodienthoai, matkhau, result) => {
  let sql = "SELECT * FROM khachhang where SoDienThoai = '" + sodienthoai + "' And MatKhau = '" + matkhau + "'"
  try {
    db.query(sql, (err, response) => {
      if (err) {
        console.log(err) 
        return result(err, null)
      }
      else {
        if (response.length > 0) {
          let accessToken = jwt.sign({data: {sodienthoai}}, process.env.ACCESS_TOKEN_SECRET)
          let refreshToken = jwt.sign({data: {sodienthoai}}, process.env.REFRESH_TOKEN_SECRET)
          return result(null, {
            accessToken: accessToken,
            refreshToken: refreshToken,
            user: response
          })
        } else {
          return result(null, response)
        }
      }
    }
    )
  } catch (e) {
    console.log('loi')
    return result(e, null)
  }
}

authen.loginDriver = (sodienthoai, matkhau, result) => {
  let sql = "SELECT * FROM laixe where SoDienThoai = '" + sodienthoai + "' And MatKhau = '" + matkhau + "'"
  try {
    db.query(sql, (err, response) => {
      if (err) {
        console.log(err) 
        return result(err, null)
      }
      else {
        if (response.length > 0) {
          var manhanvien = response[0].MaNhanVien
          let accessToken = jwt.sign({data:{manhanvien, sodienthoai}}, process.env.ACCESS_TOKEN_SECRET)
          let refreshToken = jwt.sign({data:{manhanvien, sodienthoai}}, process.env.REFRESH_TOKEN_SECRET)
          return result(null, {
            accessToken: accessToken,
            refreshToken: refreshToken,
            user: response
          })
        } else {
          return result(null, response)
        }
      }
    }
    )
  } catch (e) {
    console.log('loi')
    return result(e, null)
  }
}

module.exports = authen
