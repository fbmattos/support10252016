'use strict';

var url = require('url');


var EMAIL = require('./EMAILService');


module.exports.emailsPOST = function emailsPOST (req, res, next) {
  EMAIL.emailsPOST(req.swagger.params, res, next);
};
