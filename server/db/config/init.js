require('dotenv').config();
var connectionString;

// handling DB connection for tests
if(process.env.NODE_ENV === 'test'){
  connectionString = process.env.TEST_DATABASE_URL;
} else if(process.env.NODE_ENV !== 'test') {
  connectionString = process.env.DATABASE_URL;
}

module.exports = connectionString;
