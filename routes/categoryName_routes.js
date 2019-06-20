var express = require('express');
var categoryNamerouter = express.Router();
var CategoryNamecontroller = require('../src/controllers/categoryName.controller');


categoryNamerouter.get('/category',CategoryNamecontroller.getCategoryName)
categoryNamerouter.get('/stickers/:name',CategoryNamecontroller.getStickers)
categoryNamerouter.post('/download/:name',CategoryNamecontroller.download)



module.exports = categoryNamerouter