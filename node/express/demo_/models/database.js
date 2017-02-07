/**
 * Created by hasee on 2017/2/7.
 */
var config = require("../config/config");
var mysql = require("mysql");

var pool = mysql.createPool(config.mysql);

module.exports = pool;
