const veModel = require('../models/ve_model');

class VeController {
  vecuatoi(req, res) {
    veModel.getVeCuaToi(function(err, response) {
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
}

module.exports = new VeController;