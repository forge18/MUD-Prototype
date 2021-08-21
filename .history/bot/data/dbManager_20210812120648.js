const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

client.setProvider(
    sqlite.open({
        filename: 'database.db',
        driver: sqlite3.Database
    })
    .then(db => new Commando.SQLiteProvider(db))
).catch(console.server);
