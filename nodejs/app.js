const {initPostgres} = require('./postgres');
const {initMongoDb} = require('./mongodb');
console.log("------STARTING DATA LOADER------");

initPostgres();




