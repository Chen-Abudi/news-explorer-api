require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const { errors } = require('celebrate');

const bodyParser = require('body-parser');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandler');

const { requestLogger, errorLogger } = require('./middleware/logger');

const { apiLimiter } = require('./utils/rateLimit');
const { DB_ADDRESS } = require('./utils/config');

const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect(DB_ADDRESS);

app.use(cors());
app.options('*', cors());

app.use(helmet());
app.use(apiLimiter);

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(router);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
