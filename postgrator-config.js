require('dotenv').config();

console.log(process.env.DB_URL);

module.exports = {
    "migrationsDirectory": "migrations",
    "driver": "pg",
    "connectionString": (process.env.NODE_ENV === 'test')
        ? process.env.TEST_DB_URL
        : process.env.DB_URL,
    // "host": "127.0.0.1",
    // "port": 5432,
    // "database": "blogful",
    // "username": "dunder_mifflin",
    // "password": ""
};