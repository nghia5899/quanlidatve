const express = require('express');

const controller = require('../controllers/controller.js')

module.exports = function (app) {

  app.route('/tinh')
    .get(controller.getTinh)

  app.route('/diemdung')
    .get(controller.getdiemdung)

  app.route('/');
  
};
