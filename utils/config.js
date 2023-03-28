const {
  DB_ADDRESS = 'mongodb+srv://cheezumcali23:KzaAgFhfAXXSiltO@news-explorer.nbhsglf.mongodb.net/?retryWrites=true&w=majority',
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
