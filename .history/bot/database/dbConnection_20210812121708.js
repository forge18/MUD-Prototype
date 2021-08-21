const MongoClient = require('mongodb').MongoClient;
const MongoDBProvider = require('commando-provider-mongo').MongoDBProvider;

client.setProvider(
    MongoClient.connect('mongodb://localhost:27017')
    .then(client => new MongoDBProvider(client, 'abot'))
).catch(console.error);
