require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const { errors } = require('celebrate');
const winston = require('winston');

const bodyParser = require('body-parser');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandler');

// const { requestLogger, errorLogger } = require('./middleware/logger');

const { apiLimiter } = require('./middleware/rateLimit');
const { DB_ADDRESS, PORT } = require('./utils/config');

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

const app = express();

app.use(cors());
app.options('*', cors());

app.use(helmet());
app.use(apiLimiter);

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Server will crash now');
  }, 0);
});

app.use(router);

// app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

mongoose
  .connect(DB_ADDRESS)
  .then(() => {
    logger.info('MongoDB connected');
    app.listen(PORT, () => {
      logger.info(`App listening at port ${PORT}`);
    });
  })
  .catch((err) => {
    logger.error(err);
  });

// mongoose
//   .connect(DB_ADDRESS)
//   .then(() => {
//     console.log('MongoDB connected');
//     app.listen(PORT, () => {
//       console.log(`App listening at port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
