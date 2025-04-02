const express = require('express');
const path = require('path');
const fs = require('fs');
const { STATUS_CODE } = require('../constants/statusCode');
const renderNewProductPage = require('../views/renderNewProductPage');
const router = express.Router();

router.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'add-product.html'));
});

router.post('/add', (req, res) => {
  const product = req.body.product;
  fs.writeFileSync(path.join(__dirname, '../product.txt'), product);
  res.status(STATUS_CODE.FOUND).redirect('/product/new');
});

router.get('/new', (req, res) => {
  const data = fs.existsSync(path.join(__dirname, '../product.txt'))
      ? fs.readFileSync(path.join(__dirname, '../product.txt'), 'utf8')
      : null;
  res.send(renderNewProductPage(data));
});

module.exports = router;