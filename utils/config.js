const { DB_ADDRESS = 'mongodb://localhost:27017/news-explorer-db' } =
  process.env;

module.exports = {
  DB_ADDRESS,
};
