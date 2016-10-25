'use strict';

var url = require('url');


var EMAILS = require('./EMAILSService');


module.exports.emails_bulkPOST = function emails_bulkPOST (req, res, next) {
  EMAILS.emails_bulkPOST(req.swagger.params, res, next);
};
