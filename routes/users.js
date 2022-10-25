const express = require('express');
const { getCurrentUser } = require('../controllers/usersController');

const { validateObjectId } = require('../middleware/validation');

const usersRouter = express.Router();

usersRouter.get('/me', validateObjectId, getCurrentUser);

module.exports = usersRouter;
