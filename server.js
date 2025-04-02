const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { getErrorLog } = require('./utils/logger');
const productRoutes = require('./routing/product');
const logoutRoutes = require('./routing/logout');
const killRoutes = require('./routing/kill');
const homeRoutes = require('./routing/home');
const { STATUS_CODE } = require('./constants/statusCode');
const { PORT } = require('./config');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/product', productRoutes);
app.use('/logout', logoutRoutes);
app.use('/kill', killRoutes);
app.use(homeRoutes);

app.use((req, res) => {
  console.log(getErrorLog(new Error('Page not found')));
  res.status(STATUS_CODE.NOT_FOUND).sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(PORT, () => {
  console.log(`Server works on port ${PORT}`);
});