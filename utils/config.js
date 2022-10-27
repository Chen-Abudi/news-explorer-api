const {
  DB_ADDRESS = 'mongodb://localhost:27017/news-explorer-db',
  NODE_ENV,
  JWT_SECRET = 'super-dev-secret',
  PORT = 3000,
} = process.env;

module.exports = {
  DB_ADDRESS,
  NODE_ENV,
  JWT_SECRET,
  PORT,
};
