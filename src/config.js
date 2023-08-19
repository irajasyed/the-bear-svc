const dbConfig = require('./dbConfig.ts').dbConfig;

console.log(dbConfig);
module.exports = {
  "development": dbConfig
};