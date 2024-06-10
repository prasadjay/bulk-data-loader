module.exports.knexInstance = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        database: 'postgres',
        password: '12345',
        ssl: false,
    }
});


