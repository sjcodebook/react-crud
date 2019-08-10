require('dotenv').config();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const uri = process.env.ATLAS_URI;

const mongoConnect = callback => {
  MongoClient.connect(uri, { useNewUrlParser: true })
    .then(client => {
      console.log('connected!');
      _db = client.db();
      callback(client);
    })
    .catch(err => console.log(err));
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No Database Connected';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
