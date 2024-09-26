const express = require('express');
const router = express.Router();
const Data = require('../model/models');

router.get('/', async (req, res) => {
  try {
    const aliens = await Data.find();
    res.json(aliens);
  } catch (err) {
    res.send('Error' + err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const res1 = await Data.findById(req.params.id);
    res.json(res1);
  } catch (err) {
    res.send('Error' + err);
  }
});

router.post('/', async (req, res) => {
  const studentData = new Data
  ({
    name: req.body.name,
    rollno: req.body.rollno,
    sub: req.body.sub,
    dept: req.body.dept,
    section: req.body.section,
  });
  try {
    const a1 = await studentData.save();
    res.json(a1);
  } catch (err) {
    res.send('Error sending data')
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const studentData = await Data.findById(req.params.id);
    studentData.sub = req.body.sub;
    studentData.name = req.body.name;
    const a1 = await studentData.save();
    res.json(a1);
  } catch (err) {
    console.error('Error updating data:', err.message);
    res.status(500).send('Error updating data');
  }
});

module.exports = router;
