const getDb = require('./database').getDb;

class title {
  save(data) {
    const db = getDb();
    return db
      .collection('jobs')
      .insertOne(data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = title;
