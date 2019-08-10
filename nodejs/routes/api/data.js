const express = require('express');
const router = express.Router();
const data = require('../../Data');
const title = require('../../newTitle');
const getDb = require('../../database').getDb;

// Get all data
router.get('/', (req, res) => {
  const db = getDb();
  db.collection('jobs')
    .find({})
    .toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result[0].title);
    });
});

// Get single data
router.get('/:id', (req, res) => {
  const found = data.some(data => data.id === req.params.id);

  if (found) {
    res.json(data.filter(data => data.id === req.params.id));
  } else {
    res.status(400).json({ msg: 'not found' });
  }
});

// Create Data
router.post('/', (req, res) => {
  const newData = {
    id: req.body.id,
    title: req.body.title
  };

  if (!newData.id || !newData.title) {
    return res.status(400).json({ msg: 'plz include something' });
  }

  data.push(newData);
  res.json(data);

  const job1 = new title();
  job1
    .save(newData)
    .then(data => {
      console.log(data);
      return res.json({ responseCode: 'success', errorCode: 1 });
    })
    .catch(err => {
      console.log(err);
      return res.json({ responseCode: 'failed', errorCode: -1 });
    });
});

// Update Member
router.put('/:id', (req, res) => {
  const found = data.some(data => data.id === req.params.id);

  if (found) {
    const updateData = req.body;
    data.forEach(data => {
      if (data.id === req.params.id) {
        data.id = updateData.id ? updateData.id : data.id;
        data.title = updateData.title ? updateData.title : data.title;

        res.json({ msg: 'data updated', data });
      }
    });
  } else {
    res.status(400).json({ msg: 'not found' });
  }
});

// Delete data
router.delete('/:id', (req, res) => {
  const found = data.some(data => data.id === req.params.id);

  if (found) {
    res.json({
      msg: 'Data deleted',
      data: data.filter(data => data.id !== req.params.id)
    });
  } else {
    res.status(400).json({ msg: 'not found' });
  }
});

module.exports = router;
